require('dotenv').config();
const express = require('express');
const universityRoutes = require('./src/routes/universityRoutes');
const facultyRoutes = require('./src/routes/facultyRoutes');
const app = express();

app.use(express.json());

// Routes for University
app.use('/', universityRoutes);

// Routes for Faculty
app.use('/faculties', facultyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
