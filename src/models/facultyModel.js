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
  getFacultyByName: (name) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM faculty_name WHERE name = ?', [name], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results[0]);
      });
    });
  },
};

module.exports = FacultyModel;
