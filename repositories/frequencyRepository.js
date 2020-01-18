var db = require('../database/db')

exports.getFrequencies = function getFrequencies() {
    console.log("frequencyRepository.getFrequencies");
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM frequencies', function (err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

exports.getFrequencyById = function getFrequencyById(id) {
    console.log("frequencyRepository.getFrequencyById");
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM frequencies Where ID = ?', [id], function (err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

exports.deleteFrequencyById = function deleteFrequencyById(id) {
    console.log("frequencyRepository.deleteFrequencyById");
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM frequencies Where ID = ?', [id], function (err, result) {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

exports.addFrequency = function addFrequency(body) {
    console.log("frequencyRepository.addFrequency");
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO frequencies (Name, Multiplier) VALUES (?, ?)', [body.Name, body.Multiplier], function (err, result) {
            console.log(result);
            if (err) reject(err);
            else resolve(result);
        })
    })
}