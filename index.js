const express = require('express');
const app = express();

const path = require('path');
const members = require('./Members.js');
const logger = require('./middleware/logger.js')


// Initialize middlerware
app.use(logger);             // execute file & fresh api


// GET Method
app.get('/', (req, res) => { 
    res.send(`<h1>Hello World!!</h1> <p>Hello.. Welcome to my Page!!</p>`);       // using multiple response send file (Error: can't send headers)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));       // this is similar to below static folder
});


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Gets All Members Through API and using postman
app.get('/api/members', (req, res) => res.json(members))


// Get Single Member
app.get('/api/members/:name', (req, res) => {
    // res.send(req.params.id);            // we can get any parameter from api eg. name, id, email or status
    res.json(members.filter(member => member.name === req.params.name));     // parseInt is used to convert the data into integer
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));