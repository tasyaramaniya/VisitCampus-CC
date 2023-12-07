const mysql = require("mysql");

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'visitcampus-db',
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