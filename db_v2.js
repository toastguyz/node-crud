// const mysql = require("mysql2");

// // create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: null, // Password null if you are working locally.
//   database: "node_crud",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(
//       "errorlog connection start: " +
//         JSON.stringify(err.code) +
//         " : " +
//         JSON.stringify(err.fatal)
//     );
//   }
// });

// connection.query("SELECT * FROM user_info", function (err, results, fields) {
//   if (err) {
//     console.log(
//       "errorlog query : " +
//         JSON.stringify(err.code) +
//         " : " +
//         JSON.stringify(err.fatal)
//     );
//   }
//   console.log(results); // results contains rows returned by server
// });
