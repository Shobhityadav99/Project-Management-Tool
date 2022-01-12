const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");

router.get("/:id", async (req,res,next) => {
    const ProjectId = req.params.id;
    let project;
    try{
        project = await Project.findById(ProjectId);
    }catch(err){
        return next(err);
    }
    console.log(project);
    if(!project){
        return next(new Error("No Project Found with that id",404));
    }
    res.json({ project: project});
})

router.post("/create", async (req, res,next) => {
    // const users = req.body.users;
    // const data = req.body.data;
    const title = req.body.title
    const createProject = new Project({
        title: title
    });
    try {
        createProject.save();
    } catch (err) {
        const error = new HttpError(
            'Creating place failed, please try again',
            500
        );
        return next(error);
    }
    res.status(201).json({ project: createProject });
});

router.delete("/:id", async(req,res,next) => {
    const ProjectId = req.params.id;
    try{
        await Project.findByIdAndDelete(ProjectId);
    }catch(err){
        return next(err);
    }
    console.log("Deleted");
    res.json("Deleted");
});

module.exports = router;