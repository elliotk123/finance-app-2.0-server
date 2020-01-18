const express = require('express');
const router = express.Router();
const getFrequencies = require('../controllers/frequencies/getFrequencies');
const addFrequency = require('../controllers/frequencies/addFrequency');
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
    .get(getFrequencies.controller)
    .post(addFrequency.controller);
router.route('/:frequencyId')
    .get(getFrequencyById.controller)
    .delete(deleteFrequencyById.controller);
module.exports = router;