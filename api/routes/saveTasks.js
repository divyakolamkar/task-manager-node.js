const express = require('express');
const router = express.Router();
const Task = require('../model/Task')

router.route('/').post((req, res) => {
    const task = new Task(req.body);
    console.log(task);
    task.save().then((contact) => {
        console.log(task);
        res.json(contact);
        
    }).catch((err) => {
        res.status(400).json(err);
    })
});

module.exports = router;


