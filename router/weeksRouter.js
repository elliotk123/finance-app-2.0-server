const express = require('express');
const router = express.Router();
const getWeek = require('../controllers/weeks/getCurrentWeek');
const addWeeks = require('../controllers/frequencies/addWeeks');

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': '*'
    })
    next();
})
router.route('/')
    .post(addWeeks.controller);
router.route('/:weekId')
    .get(getWeek.controller);
module.exports = router;