/** @format */

const express = require("express");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");

require("./db/database");

const app = express();

app.use(express.json());

PORT = 5000 || process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "*");

  next();
});

app.use("/user", userRoutes);
app.use("/project", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
