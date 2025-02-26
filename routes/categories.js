const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categories');

router.get('/kategori', categoryController.getAllCategories);
router.post('/kategori', categoryController.addCategory);
router.put('/kategori:id', categoryController.updateCategory);
router.delete('/kategori:id', categoryController.deleteCategory);

module.exports = router;
