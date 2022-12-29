let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // Enter your mysql Password here
  password: "",
  database: "tracker_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

module.exports = { connection };