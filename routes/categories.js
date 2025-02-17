const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all categories
router.get('/', (req, res) => {
  db.query('SELECT * FROM kategori', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

// Add a new category
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  db.query('INSERT INTO kategori (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: results.insertId, name });
    }
  });
});

module.exports = router;
