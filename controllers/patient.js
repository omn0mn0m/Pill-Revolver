const Patient = require('../models/Patient.js');
const Medication = require('../models/Medication.js');

exports.getPatients = (req, res) => {
    Patient.find((err, docs) => {
	Medication.find((err, docs2) => {
	        res.render('patients', { patients: docs, medications: docs2 });
        });
    });
};

exports.getAddPatient = (req, res) => {
    res.render('addpatient', {
        title: 'Add Patient'
    });
};

exports.postAddPatient = (req, res) => {
    const patient = new Patient({
        name: req.body.patientName,
        age: req.body.patientAge,
        birthdate: req.body.birthdate,
    });

    patient.save((err) => {
      if (err) { return; }
      res.redirect('/patients');
    });
};

exports.getAddMedication = (req, res) => {
    res.render('addmedication', {
        title: 'Add Medication'
    });
};

exports.postAddMedication = (req, res) => {
    const medication = new Medication({
        patient: req.body.patient,
        name: req.body.name,
        dose: req.body.dose,
        time: req.body.time,
    });

    medication.save((err) => {
      if (err) { return; }
      res.redirect('/patients');
    });
};
