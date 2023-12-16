const univModel = require("../models/univModel.js");
const db = require("../config/database.js");

exports.getUniversities = async (req, res) => {
  try {
    const result = await univModel.getAllUniversities();

    console.log("Result from getAllUniversities:", result);

    const universities = Array.isArray(result) ? result : [];

    const formattedData = await Promise.all(
      universities.map(async (university) => {
        const universityId = university.university_id;
        try {
          const achievements = await univModel.getUniversityAchievements(
            universityId
          );
          console.log(
            `Achievements for university ID ${universityId}:`,
            achievements
          );

          const alumniProfiles = await univModel.getAlumniProfiles(
            universityId
          );
          console.log(
            `Alumni profiles for university ID ${universityId}:`,
            alumniProfiles
          );

          const registrationPaths = await univModel.getRegistrationPaths(
            universityId
          );
          console.log(
            `Registration paths for university ID ${universityId}:`,
            registrationPaths
          );

          const faculties = await univModel.getFaculties(universityId);
          console.log(
            `Faculties for university ID ${universityId}:`,
            faculties
          );

          return {
            university_id: university.university_id,
            univ_name: university.univ_name,
            personality_univ: university.personality_univ,
            univLogo: university.univLogo,
            univCover: university.univCover,
            latitude: university.latitude,
            longitude: university.longitude,
            achievement_university: achievements,
            profile_alumnus: alumniProfiles,
            registration_path: registrationPaths,
            faculties: faculties,
          };
        } catch (error) {
          console.error(
            "Error fetching data for university ID",
            universityId,
            ":",
            error
          );
          // Return a placeholder object in case of error for this university
          return {
            university_id: universityId,
            error: "Internal Server Error for University ID " + universityId,
          };
        }
      })
    );

    const jsonResponse = JSON.stringify(formattedData, null, 2);

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(jsonResponse);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};