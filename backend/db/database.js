const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// const DB = process.env.URI;

mongoose
  .connect("mongodb+srv://Nishchay:Nishchay**@project-manager.xxlgy.mongodb.net/Project-Manager?retryWrites=true&w=majority")
  .then(() => console.log("successfully connected to database!"))
  .catch((err) => console.log(err));
