const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes/loans.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/kategori', Routes);
app.use('/loans', Routes);
app.use('/', Routes);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
