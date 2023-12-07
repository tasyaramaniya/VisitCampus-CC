const UniversityModel = require('../models/universityModel');

const UniversityController = {
  getAllUniversities: async (req, res) => {
    try {
      const universities = await UniversityModel.getAllUniversities();
      res.json(universities);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUniversityById: async (req, res) => {
    try {
      const { id } = req.params;
      const university = await UniversityModel.getUniversityById(id);

      if (!university) {
        res.status(404).json({ message: 'University not found' });
      } else {
        res.json(university);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = UniversityController;
