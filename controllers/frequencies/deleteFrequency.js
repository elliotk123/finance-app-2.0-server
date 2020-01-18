var frequencyLogic = require('../../logic/frequencyLogic');

exports.controller = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log("Delete Frequency By Id Request");
        frequencyLogic.deleteFrequencyById(req.params.frequencyId).then(() => {
            res.send();
        }).catch( err => {
            next(err);
        });
    }) 
}