const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secretKey = 'yourSecretKey'; // Ganti dengan kunci rahasia yang kuat

const UserController = {
  registerUser: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      User.createUser(name, email, hashedPassword, (err) => {
        if (err) {
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.status(201).json({ message: 'User registered successfully' });
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  loginUser: (req, res) => {
    const { email, password } = req.body;

    User.getUserByEmail(email, async (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(401).json({ error: 'Email or password is incorrect' });
      } else {
        const match = await bcrypt.compare(password, results[0].password);
        if (match) {
          const token = jwt.sign({ userId: results[0].id }, secretKey, { expiresIn: '1h' });
          res.status(200).json({ message: 'Login successful', token });
        } else {
          res.status(401).json({ error: 'Email or password is incorrect' });
        }
      }
    });
  },
};

module.exports = UserController;
