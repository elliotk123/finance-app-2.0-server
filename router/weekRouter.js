const express = require('express');
const router = express.Router();
const getCurrentWeek = require('../controllers/weeks/getCurrentWeek');
const addWeek = require('../controllers/frequencies/addFrequency');
const getFrequencyById = require('../controllers/frequencies/getFrequencyById');
const deleteFrequencyById = require('../controllers/frequencies/deleteFrequency');

router.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT',
        'Access-Control-Allow-Headers': '*'
    })
    next();
})
router.route('/')
    .post(addWeek.controller);
module.exports = router;