/** @format */

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSaltSync(8);
  const hashedPass = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });
  try {
    await newUser.save();
    res.status(200).json({ name: newUser.name, email: newUser.email });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(500).send("Username or password incorrect");
    }
    const pass = await bcrypt.compareSync(req.body.password, user.password);
    if (!pass) {
      return res.status(500).send("Username or password incorrect");
    }
      jwt.sign({user}, process.env.JWT_SECRET, { expiresIn: "1hr" }, (err, token) => {
        if(err) {
          return res.json(err);
        }
        res.json({token});
      })
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/display/:userId", authMiddleware, async (req, res) => {
  const user = await User.findOne({id: req.params.userId});
  if(!user)
    return res.status(404).json({msg: "user not found"});
  res.status(200).json(user);
})

router.get("/dashboard/:userId", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(500).send("Invalid User");
    }
    res.json({
      projects: user.projects,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
