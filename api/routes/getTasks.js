const express = require('express');
const router = express.Router();
const Task = require('../model/Task')


// -Remove Fields
router.route('/').get((req, res) => {
    Task.find({}, "-__v", (err, data) => {
        if(err){
            res.send(400).json(err);
        }
        res.json(data)
    })
});

module.exports = router;