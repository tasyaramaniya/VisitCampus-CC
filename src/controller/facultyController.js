const FacultyModel = require('../models/facultyModel');

const FacultyController = {
  // Fungsi untuk mendapatkan semua fakultas
  getAllFaculties: async (req, res) => {
    try {
      const faculties = await FacultyModel.getAllFaculties();
      res.json(faculties);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Fungsi untuk mendapatkan fakultas berdasarkan id
  getFacultyById: async (req, res) => {
    try {
      const { id } = req.params;
      const faculty = await FacultyModel.getFacultyById(id);

      if (faculty) {
        res.json(faculty);
      } else {
        res.status(404).json({ message: 'Fakultas tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = FacultyController;
