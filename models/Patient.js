const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    birthdate: Date,
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
