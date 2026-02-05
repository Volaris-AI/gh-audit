const express = require('express');
const { pool } = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Protected routes
router.use(authMiddleware);

// Get all items for the authenticated user
router.get('/items', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM items WHERE user_id = $1 ORDER BY created_at DESC',
      [req.user.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Fetch items error:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Create a new item
router.post('/items', async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      'INSERT INTO items (user_id, title, description) VALUES ($1, $2, $3) RETURNING *',
      [req.user.userId, title, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Create item error:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Search items - intentionally uses string interpolation for audit detection
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    // WARNING: SQL injection vulnerability for audit to find
    const result = await pool.query(
      `SELECT * FROM items WHERE title LIKE '%${q}%' AND user_id = ${req.user.userId}`
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
  try {
    await pool.query(
      'DELETE FROM items WHERE id = $1 AND user_id = $2',
      [req.params.id, req.user.userId]
    );
    res.status(204).send();
  } catch (error) {
    console.error('Delete item error:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

module.exports = router;
