const examModel = require('../models/examModel');

// Mendapatkan semua latihan soal
exports.getAllPracticeExams = (req, res) => {
  examModel.getAllPracticeExams((err, result) => {
    if (err) {
      console.error('Error querying database: ' + err.message);
      res.status(500).send('Error querying database');
    } else {
      const formattedResult = JSON.stringify(result, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResult);
    }
  });
};

// Mendapatkan pertanyaan untuk suatu latihan soal berdasarkan practice_id
exports.getPracticeExamQuestions = (req, res) => {
  const practiceId = req.params.practiceId;
  examModel.getPracticeExamQuestions(practiceId, (err, result) => {
    if (err) {
      console.error('Error querying database: ' + err.message);
      res.status(500).send('Error querying database');
    } else {
      const formattedResult = JSON.stringify(result, null, 2);
      res.setHeader('Content-Type', 'application/json');
      res.send(formattedResult);
    }
  });
};

// Menambahkan hasil ujian
exports.addExamResult = (req, res) => {
  const { practiceId, studentId, score, dateTaken } = req.body;
  examModel.addExamResult(practiceId, studentId, score, dateTaken, (err, result) => {
    if (err) {
      console.error('Error querying database:', err.message);
      res.status(500).send({ error: 'Internal Server Error', message: err.message });
    } else {
      res.json({ message: 'Result added successfully' });
    }
  });
};
