const express = require('express');
const router = express.Router();
const members = require('../../Members');

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

module.exports = router;