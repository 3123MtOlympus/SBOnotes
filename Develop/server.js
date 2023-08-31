// Importing  Express.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');


// Import Node.js package
const app = express();

// Choosing specifically which port Express will run
const PORT = 3001

// Static middleware pointing to the public folder
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;

       const parsedData = JSON.parse(data);
        res.json(parsedData);
    });

});

app.post('/api/notes', (req, res) => {
    console.log('Note added and saved to db.json'); 
    if (err) throw err;

    const parsedNotes = JSON.parse(notes);
        parsedNotes.push(newNote);
    

    fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), (writeErr) => 
    (writeErr) 
    ? console.error(writeErr)
    : console.info ('Successfully updated notes!')
    
    )
});

// Create Express.js routes for default end points
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Listen for connections
app.listen(PORT, () =>
console.log (`Example app listening at http://localhost:${PORT}`)
);