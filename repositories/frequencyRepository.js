var db = require('../database/db')

exports.getFrequencies = function getFrequencies() {
    console.log("frequencyRepository.getFrequencies");
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM frequencies', function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })
    
}