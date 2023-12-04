const db = require("../config/database");

const UniversityModel = {
  getAllUniversities: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM university", (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  },

  getUniversityById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM universities WHERE id = ?', [id], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results[0]);
      });
    });
  },
};

module.exports = UniversityModel;
