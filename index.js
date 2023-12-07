// index.js
require('dotenv').config();
const express = require('express');
const universityRoutes = require('./src/routes/universityRoutes');
const facultyRoutes = require('./src/routes/facultyRoutes');
const majorRoutes = require('./src/routes/majorRoutes');
const achievementRoutes = require('./src/routes/achievementRoutes');
const alumniRoutes = require('./src/routes/alumniRoutes');
const registrationRoutes = require('./src/routes/registrationRoutes');
const examRoutes = require('./src/routes/examRoutes'); 
const app = express();

app.use(express.json());

// Routes for University
app.use('/university', universityRoutes);

// Routes for Faculty
app.use('/faculties', facultyRoutes);

// Routes for Majors
app.use('/majors', majorRoutes);

// Routes for Achievements
app.use('/achievements', achievementRoutes);

// Routes for Alumni
app.use('/alumni', alumniRoutes);

// Routes for Registration Paths
app.use('/registration', registrationRoutes);

// Routes for Exam
app.use('/exams', examRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
