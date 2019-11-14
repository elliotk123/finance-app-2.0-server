var mysql = require('mysql');
var fs = require('fs');

var args = process.argv.slice(2);

var config = require(args[0]);
var sql = fs.readFileSync(args[1]).toString();

var con = mysql.createConnection(config);
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Query Executed!");
  });
});