var mysql = require('mysql');
var config = require('./sql-connection-elliotk.json');

var con = mysql.createConnection(config);
con.connect(function(err) {
  if (err) throw err;
});
module.exports = con;