var frequencyRepository = require('../repositories/frequencyRepository')

exports.getFrequencies = function getFrequencies() {
    return frequencyRepository.getFrequencies();
}