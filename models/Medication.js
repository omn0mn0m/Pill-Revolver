const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    patient: String,
    name: String,
    dose: Number,
    time: Number,
    lastTaken: Date,
});

const Medication = mongoose.model('Medication', medicationSchema);
module.exports = Medication;
