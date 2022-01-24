const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");
const mongoose = require('mongoose');

router.get("/:id", async (req, res, next) => {
    const ProjectId = req.params.id;
    let project;
    try {
        project = await Project.findById(ProjectId);
    } catch (err) {
        return next(err);
    }
    console.log(project);
    if (!project) {
        return next(new Error("No Project Found with that id", 404));
    }
    res.json({ project: project });
});

router.patch("/:id", async (req, res, next) => {
    const projectId = req.params.id;
    let project;
    try {
        project = await Project.findById(projectId);
    } catch (err) {
        return next(err);
    }
    if (!project) {
        return next(new Error("No Project Found with that id", 404));
    }
    if(req.body.flag == "AddNew") {
    const title = req.body.title;
    const tasks = req.body.tasks;
    const data = project.data;
    data.push({title,tasks});
    await project.updateOne({data: data});
    res.json({message: "Project Updated"})
    }
    else if(req.body.flag === "Delete" ){
        try {
            await project.updateOne({data : project.data.filter((card) => card._id.toString() !== req.body.id)});
            res.json(project);
        } catch (err) {
            res.status(500).json(err);
        }
    } else if(req.body.flag === "UpdateTitle"){
        try {
            await project.updateOne({data : project.data.map((card) => {
                console.log(card._id.toString());
                console.log(req.body.id);
                if (card._id.toString() === req.body.id){
                    card.title = req.body.title
                }
            })});
            res.json(project);
        } catch (err) {
            res.status(500).json(err);
        }
    } else{
        next("Invalid Route",404);
    }
});

router.post("/create/:userId", async (req, res, next) => {
    const createdProject = new Project({
        admin: req.params.userId,
        ProjectTitle: req.body.title,
        data: [{
            title: "Title 1",
            tasks: [
                "task 1",
                "task 2"
            ]
        }]
    });
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch (err) {
        const error = new Error(
            'Creating place failed, please try again.',
            500
        );
        return next(error);
    }

    if (!user) {
        const error = new Error('Could not find user for provided id.', 404);
        return next(error);
    }
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdProject.save({ session: sess });
        user.projects.push({ title: req.body.title, project: createdProject });
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        const error = new Error(
            'Creating project failed, please try again.',
            500
        );
        return next(error);
    }
    res.status(201).json({ project: createdProject });
});

router.delete("/:id", async (req, res, next) => {
    const ProjectId = req.params.id;
    try {
        await Project.findByIdAndDelete(ProjectId);
    } catch (err) {
        return next(err);
    }
    console.log("Deleted");
    res.json("Deleted");
});

module.exports = router;