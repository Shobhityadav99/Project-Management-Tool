const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  // const salt = await bcrypt.genSaltSync(8);
  // const hashedPass = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.json(newUser);
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
    // const pass = bcrypt.compareSync(req.body.password, user.password);
    // if (!pass) {
    //   return res.status(500).send("Username or password incorrect");
    // }
    res.json({
      message: "Logged IN",
      user: user.toObject({ getters: true })
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;