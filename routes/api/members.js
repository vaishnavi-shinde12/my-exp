const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

// Gets All Members Through API and using postman
router.get('/', (req, res) => res.json(members))


// Get Single Member
router.get('/:id', (req, res) => {
    // res.send(req.params.id);            // we can get any parameter from api eg. name, id, email or status
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));     // parseInt is used to convert the data into integer
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}` });
    }
});


// Create Member
router.post('/', (req, res) => {
//    res.send(req.body);           // here we have to use the body parser to parse the body content
const newMember = {                // we install uuid for getting random id(npm i uuid)
    id: uuid.v4(),                 // here generate the random universal id
    name: req.body.name,
    email: req.body.email,
    status: 'active'  
}

if(!newMember.name || !newMember.email) {
    res.status(400).json({msg: 'Please include a name and email'});
}       
members.push(newMember);      
res.json(members);            // respond with actually members

});


module.exports = router;