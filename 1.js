// Required module express
const express = require('express');

// Init express
const req = express();

// Create ur endpoints/route handlers
req.get('/',function(req, res) {
    console.log("Server is in running process");     // the o/p of this stmt will get display after we refresh the page
    res.send('Hello World !');
    console.log("Server is running ...");
});

// Listen on a port of localhost 
req.listen(5000);       

// req.accepts('html');