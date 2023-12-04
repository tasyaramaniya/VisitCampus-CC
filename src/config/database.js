const mysql = require("mysql");

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Buat koneksi
db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ' + err.stack);
    return;
  }
  console.log('Koneksi ke database berhasil, ID koneksi: ' + db.threadId);
});

module.exports = db;