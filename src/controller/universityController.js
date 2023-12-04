const UniversityModel = require("../models/universityModel");

const UniversityController = {
  getAllUniversities: async (req, res) => {
    try {
      const universities = await UniversityModel.getAllUniversities();
      res.json(universities);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUniversityById: async (req, res) => {
    try {
      const { id } = req.params;
      const university = await UniversityModel.getUniversityById(id);

      if (university) {
        res.json(university);
      } else {
        res.status(404).json({ message: 'Universitas tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

};

module.exports = UniversityController;
