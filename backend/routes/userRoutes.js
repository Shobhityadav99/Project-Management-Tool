/** @format */

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth");

router.get(
  "/account/updateProfile/:userId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        res.status(404).json("User not found");
      }

      // Make sure that the user currently logged in can't change the profile of other users
      try {
        const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
        if (decoded.user._id != req.params.userId)
          return res.status(401).send("Invalid session");
      } catch (err) {
        return res.status(401).json({ msg: "token invalid" });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
);

router.patch(
  "/account/updateProfile/:userId",
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        res.status(404).json("User not found");
      }
      await user.update({ bio: req.body.bio });

      // Make sure that the user currently logged in can't change the profile of other users
      try {
        const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
        console.log(decoded);
        if (decoded.user._id != req.params.userId)
          return res.status(401).send("Invalid session");
      } catch (err) {
        return res.status(401).json({ msg: "token invalid" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
);

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSaltSync(8);
  const hashedPass = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
    bio: "",
  });
  try {
    await newUser.save();
    jwt.sign(
      { newUser },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) {
          return res.json(err);
        }
        res.json({ user: newUser, token });
      },
    );
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
    jwt.sign(
      { user },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) {
          return res.json(err);
        }
        res.json({ user, token });
      },
    );
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/display/:userId", authMiddleware, async (req, res) => {
  const user = await User.findOne({ id: req.params.userId });
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.status(200).json(user);
});

router.get("/dashboard/:userId", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(500).send("Invalid User");
    }

    // Make sure that the user currently logged in can't access the dashboard of other users
    try {
      const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
      console.log(decoded);
      if (decoded.user._id != req.params.userId)
        return res.status(401).send("Invalid session");
    } catch (err) {
      return res.status(401).json({ msg: "token invalid" });
    }
    res.json({
      projects: user.projects,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
