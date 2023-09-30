const express = require("express");
const app = express();
// const bodyParser = require("body-parser"); /* deprecated */
require("express-async-errors");

// set port, listen for requests
const PORT = process.env.PORT || 3000;

const db = require("./db"),
  userRoutes = require("./controllers/users_controller");

// Middleware

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({statusCode: err.status || 500, message: err.message ?? "Something went wrong..."});
});

db.query("SELECT 1")
  .then((data) => {
    console.log("Success : ", data);

    app.listen(PORT, () => console.log("Server started at the port..."));
  })
  .catch((err) => console.log("Error : ", err));
