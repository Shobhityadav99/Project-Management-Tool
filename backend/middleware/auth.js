/** @format */

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async function (req, res, next) {
  const bearerHeader = req.header("authorization");
  if (!bearerHeader) {
    return res.status(403).json({ msg: "access denied!" });
  }
  const bearerToken = bearerHeader.split(" ")[1];
  try {
    jwt.verify(bearerToken, process.env.JWT_SECRET);
  } catch (err) {
    return res.json({ msg: "token invalid" });
  }
  req.token = bearerToken;
  next();
};
