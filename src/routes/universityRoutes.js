const express = require('express');
const router = express.Router();
const UniversityController = require('../controller/universityController');

router.get('/', UniversityController.getAllUniversities);

module.exports = router;
