const mysql = require("mysql");

// Konfigurasi koneksi ke database
const db = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'visitcampus-db',
});

module.exports = db;