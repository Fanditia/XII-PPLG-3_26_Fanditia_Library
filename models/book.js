const db = require ('../config/db.js')

const getindex = async () => {
    try {
        const SQLQuery = `
            SELECT book.id, book.title, book.writer, book.publisher, book.year, 
                   users.name AS user_name, categories.name AS category_name
            FROM book
            JOIN users ON book.user_id = users.id
            JOIN categories ON book.category_id = categories.id;
        `;
        const [rows] = await db.promise().execute(SQLQuery);
        return rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
};

const getByid = async (id) => {
    const SQLQuery = `
        SELECT book.id, book.title, book.writer, book.publisher, book.year, 
               users.name AS user_name, categories.name AS category_name
        FROM book
        JOIN users ON book.user_id = users.id
        JOIN categories ON book.category_id = categories.id
        WHERE book.id = ?;
    `;
    return db.promise().execute(SQLQuery, [id]);
};


const createnew = async (body) => {
    const SQLQuery = `INSERT INTO book (title, writer, publisher, year, user_id, category_id) 
                      VALUES (?, ?, ?, ?, ?, ?)`;
    try {
        const [result] = await db.promise().execute(SQLQuery, [
            body.title, body.writer, body.publisher, body.year, body.user_id, body.category_id
        ]);
        return result; // Mengembalikan hasil query
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
};

const updateBook = async (id, body) => {
    const SQLQuery = `UPDATE book 
                      SET title = ?, writer = ?, publisher = ?, year = ?, user_id = ?, category_id = ? 
                      WHERE id = ?`;
    try {
        const [result] = await db.promise().execute(SQLQuery, [
            body.title, body.writer, body.publisher, body.year, body.user_id, body.category_id, id
        ]);
        return result;
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
};


const deleteBook = async (id) => {
    const SQLQuery = `DELETE FROM book WHERE id = ?`;
    try {
        const [result] = await db.promise().execute(SQLQuery, [id]);
        return result;
    } catch (error) {
        console.error("Database Error:", error);
        throw error;
    }
};


module.exports = {
    getindex,
    createnew,
    updateBook,
    deleteBook,
    getByid,
}