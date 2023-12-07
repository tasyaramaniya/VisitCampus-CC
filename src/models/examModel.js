// examModel.js
const db = require('../config/database');

// Mendapatkan semua latihan soal
const getAllPracticeExams = (callback) => {
  const query = 'SELECT * FROM `practice exam`';
  db.query(query, (err, result) => {
    callback(err, result);
  });
};

// Mendapatkan pertanyaan untuk suatu latihan soal berdasarkan practice_id
const getPracticeExamQuestions = (practiceId, callback) => {
  const query = 'SELECT * FROM `question exam` WHERE practice_id = ?';
  db.query(query, [practiceId], (err, result) => {
    callback(err, result);
  });
};

// Menambahkan hasil ujian
const addExamResult = (practiceId, studentId, score, dateTaken, callback) => {
  const query = 'INSERT INTO `result exam` (practice_id, student_id, score, date_taken) VALUES (?, ?, ?, ?)';
  db.query(query, [practiceId, studentId, score, dateTaken], (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  getAllPracticeExams,
  getPracticeExamQuestions,
  addExamResult,
};
