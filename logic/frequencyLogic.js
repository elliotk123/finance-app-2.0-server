var frequencyRepository = require('../repositories/frequencyRepository');
var namedErrors = require('../utils/namedError');

exports.getFrequencies = function getFrequencies() {
    return frequencyRepository.getFrequencies();
}

exports.getFrequencyById = function getFrequencyById(id) {
    return new Promise((resolve, reject) => {
        console.log("frequencyLogic.getFrequencyById")
        frequencyRepository.getFrequencyById(id).then(result => {
            if(result.length === 0){
                reject(new Error(namedErrors.NotFound));
            }else {
                resolve(result);
            }
           
        })
    }) 
}

exports.deleteFrequencyById = function deleteFrequencyById(id) {
    return new Promise((resolve, reject) => {
        console.log("frequencyLogic.deleteFrequencyById")
        frequencyRepository.deleteFrequencyById(id).then(result => {
            if (result.affectedRows === 0) {
                reject(new Error(namedErrors.NotFound));
            } else {
                resolve();
            }
            
           
        })
    }) 
}

exports.addFrequency = function(body) {
    return new Promise((resolve, reject) => {
        frequencyRepository.addFrequency(body).then(result => {
            resolve({id : result.insertId});
        })
    })
}