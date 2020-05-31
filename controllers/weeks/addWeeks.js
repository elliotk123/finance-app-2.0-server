var weeksLogic = require('../../logic/weeksLogic');

exports.controller = (req, res) => {
    return new Promise((resolve, reject) => {
        console.log("add weeks request");
        return weeksLogic.addWeeks(req.body).then(result => {
            res.send(result)
        }).catch( err => {
            next(err);
        });
    })   
}