var frequencyLogic = require('../../logic/frequencyLogic');

exports.controller = (req, res) => {
    return new Promise((resolve, reject) => {
        console.log("add frequency request");
        return frequencyLogic.addFrequency(req.body).then(result => {
            res.send(result)
        }).catch( err => {
            next(err);
        });
    })   
}