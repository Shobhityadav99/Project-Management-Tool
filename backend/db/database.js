/** @format */

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.URI;

mongoose
  .connect(DB)
  .then(() => console.log("successfully connected to database!"))
  .catch((err) => console.log(err));
