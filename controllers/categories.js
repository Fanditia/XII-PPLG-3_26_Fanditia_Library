const Category = require('../models/categories');

exports.getAllCategories = (req, res) => {
  Category.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.addCategory = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  Category.add(name, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: results.insertId, name });
    }
  });
};

exports.updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  Category.update(id, name, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'Category Updated', id, name });
    }
  });
};

exports.deleteCategory = (req, res) => {
  const { id } = req.params;

  Category.delete(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'Category Deleted', id });
    }
  });
};
