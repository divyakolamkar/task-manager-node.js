const express = require('express')
const router = express.Router();

router.route('/').get((req, res) => {
    console.log('Page Not Found');
    res.sendStatus(404).send('Page Not Found');
});

module.exports = router;