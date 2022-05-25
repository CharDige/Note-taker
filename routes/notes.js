// Using Express Router
const notes = require('express').Router();

// Module exports
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET route to retrieve notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) =>
    res.json(JSON.parse(data)));
});