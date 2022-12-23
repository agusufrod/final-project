const mysql = require('mysql');
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE } = process.env;
const connection = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE,
});

module.exports = connection;
