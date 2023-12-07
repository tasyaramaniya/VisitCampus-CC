const db = require('../config/database');

const RegistrationPathModel = {
  getAllRegistrationPaths: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM registration', (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  },

  getRegistrationPathsByUniversityId: (universityId) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM registration WHERE university_id = ?', [universityId], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  },
};

module.exports = RegistrationPathModel;
