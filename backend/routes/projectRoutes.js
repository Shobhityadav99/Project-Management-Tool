const router = require("express").Router();
const Project = require("../models/Project");
const User = require("../models/User");

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const user = User.findById(id);
        if (!user) {
            return res.status(404).json("User not found");
        }
        const projects = Project.find({ user });
        res.json(projects);
    } catch (err) {
        res.status(500).json("Internal server error");
    }
});

router.post("/create", async (req, res,next) => {
    const users = req.body.users;
    const data = req.body.data;
    const createProject = new Project({
        users: users,
        data: data,
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

module.exports = router;