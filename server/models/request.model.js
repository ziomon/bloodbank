const mongoose = require('mongoose');

const RequestBloodSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientAge: {
    type: Number,
    required: true,
  },
  patientBloodGroup: {
    type: String,
    required: true,
  },
  patientBloodUnits: {
    type: Number,
    required: true,
  },
  patientLocation: {
    type: String,
    required: true,
  },
  standeeName: {
    type: String,
    required: true,
  },
  standeeNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
},{
    timestamps:true,
  });

const RequestBlood = mongoose.model('Blood_Searches', RequestBloodSchema);

module.exports = RequestBlood;
