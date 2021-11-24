const express = require("express");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

require("./db/database");

const app = express();

app.use(bodyParser.json());

PORT = 5000 || process.env.PORT;

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});