const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { pool } = require('../db');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-change-me';

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user - uses parameterized query
    const result = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );

    const token = jwt.sign(
      { userId: result.rows[0].id, username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({ user: result.rows[0], token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
