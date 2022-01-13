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
})

router.post("/create/:userId", async (req, res, next) => {
    const createdProject = new Project({
        admin: req.params.userId,
        ProjectTitle: req.body.title
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
        user.projects.push(createdProject);
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