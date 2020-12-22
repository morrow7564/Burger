// Set up MySQL connection.
var mysql = require("mysql");

console.log(process.env.NODE_ENV)

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Root",
//   database: "burgers_db"
// });

var connection = mysql.createConnection({
  host: "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "mladqyn1uzqpi549",
  password: "lrhadtm8j36c1qoe",
  database: "i9rjjbuzzbtp8xfp"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
