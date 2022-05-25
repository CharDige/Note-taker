// Module requirements
const express = require('express');
const path = require('path');

// cLog export
const { clog } = require('./middleware/clog');

// PORT
const PORT = 3001;

// app variable with Express.js
const app = express();

// Importing the cLog middleware
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Wildcard route, so user is directed back to index.html, no matter the query/parameter
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// App listening to PORT
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});