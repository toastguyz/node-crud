const mysql = require("mysql2/promise");

// create the connection to database
const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: null, // Password null if you are working locally.
  database: "node_crud",
});

module.exports = mySqlPool;
