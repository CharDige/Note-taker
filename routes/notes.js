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

// POST route for adding a new note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added!');
    } else {
        res.error('Error - Note not added');
    }
});

module.exports = notes;