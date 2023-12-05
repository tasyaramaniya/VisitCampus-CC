const db = require('../config/database');

const FacultyModel = {
  // Fungsi untuk mendapatkan semua fakultas
  getAllFaculties: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM faculty', (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  },

  // Fungsi untuk mendapatkan fakultas berdasarkan nama
  getFacultyById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM faculty_id WHERE id = ?', [id], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results[0]);
      });
    });
  },
};

module.exports = FacultyModel;
