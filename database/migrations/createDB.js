var mysql = require('mysql');
var config = require('../sql-connection-elliotk.json');

var con = mysql.createConnection({
  "host": config.host,
  "user": config.user,
  "password": config.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE test", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});