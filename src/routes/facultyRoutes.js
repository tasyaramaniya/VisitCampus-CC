const express = require('express');
const router = express.Router();
const FacultyController = require('../controller/facultyController');

// Rute untuk mendapatkan semua fakultas
router.get('/faculties', FacultyController.getAllFaculties);

// Rute untuk mendapatkan fakultas berdasarkan nama
router.get('/:name', FacultyController.getFacultyByName);


module.exports = router;
