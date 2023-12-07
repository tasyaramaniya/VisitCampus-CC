const express = require('express');
const router = express.Router();
const UniversityController = require('../controller/universityController');

router.get('/', UniversityController.getAllUniversities);
router.get('/:id', UniversityController.getUniversityById);

module.exports = router;
