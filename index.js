const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger.js')


// Initialize middlerware
app.use(logger);             // execute file & fresh api


// Body Parse Middleware (for post method in members.js file)
app.use(express.json());                 // handles json
app.use(express.urlencoded({ extended : false }));     // handles file submission


// GET Method
app.get('/', (req, res) => { 
    res.send(`<h1>Hello World!!</h1> <p>Hello.. Welcome to my Page!!</p>`);       // using multiple response send file (Error: can't send headers)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));       // this is similar to below static folder
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));