const mysql = require("mysql2");

require("dotenv").config();

//create connection to our db
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: "employee-trakr-db",
});

module.exports = db;
