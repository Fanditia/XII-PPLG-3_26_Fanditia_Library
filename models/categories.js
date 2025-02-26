const db = require('../config/db');

const Category = {
  getAll: (callback) => {
    db.query('SELECT * FROM kategori', callback);
  },

  add: (name, callback) => {
    db.query('INSERT INTO kategori (name) VALUES (?)', [name], callback);
  },

  update: (id, name, callback) => {
    db.query('UPDATE kategori SET name = ? WHERE id = ?', [name, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM kategori WHERE id = ?', [id], callback);
  },
};

module.exports = Category;
