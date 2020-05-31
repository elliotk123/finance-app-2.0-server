var weeksLogic = require('../../logic/weeksLogic');

exports.controller = (req, res, next) => {
    return new Promise((resolve, reject) => {
        console.log("Get Week By Date Request");
        weeksLogic.getWeek(req.params.weekBegin).then(result => {
            res.send(result);
        }).catch( err => {
            next(err);
        });
    }) 
}