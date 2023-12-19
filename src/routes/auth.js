const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/authController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protectedRoute', authenticateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;