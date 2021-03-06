var frequencyLogic = require('../../logic/frequencyLogic');

exports.controller = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log("Get Frequency By Id Request");
        frequencyLogic.getFrequencyById(req.params.frequencyId).then(result => {
            res.send(result);
        }).catch( err => {
            next(err);
        });
    }) 
}