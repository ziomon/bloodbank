const mongoose = require('mongoose');
const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // add the unique property to the email field
  },
  password: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required :true
  }
}, {
  timestamps: true
});

const Donor = mongoose.model('Users', donorSchema);

module.exports = Donor;
