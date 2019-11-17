var frequencyLogic = require('../../logic/frequencyLogic');

exports.controller = (req, res) => {
    console.log("Get Frequencies Request");
    frequencyLogic.getFrequencies().then(result => {
        console.log(result);
        res.send(result);
    });
}