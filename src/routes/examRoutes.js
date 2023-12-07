const express = require('express');
const router = express.Router();
const examController = require('../controller/examController');

// Endpoint untuk mendapatkan semua latihan soal
router.get('/', examController.getAllPracticeExams);

// Endpoint untuk mendapatkan pertanyaan untuk suatu latihan soal berdasarkan practice_id
router.get('/:practiceId/questions', examController.getPracticeExamQuestions);

// Endpoint untuk menambahkan hasil ujian
router.post('/results', examController.addExamResult);

module.exports = router;