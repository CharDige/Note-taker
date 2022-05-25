// Require express.js
const express = require('express');

// Import modular router for /notes
const notesRouter = require('./notes');

// app variable with express
const app = express();

app.use('/notes', notesRouter);

module.exports = app;