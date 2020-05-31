var db = require('../database/db');

exports.addWeek = function addWeek(body) {
    console.log("WeeksRepository.addWeek");
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO week (Week_Begin, State_Id) VALUES (?, ?)', [body.Week_Begin, body.State_Id], function (err, result) {
            console.log(result);
            if (err) reject(err);
            else resolve(result);
        })
    })
}