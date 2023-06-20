const router = require('express').Router();
const RequestBlood = require('../models/request.model');
const Donor = require('../models/user.model');

router.route('/').post((req, res) => {
  const { patientName, patientAge, patientBloodGroup, patientBloodUnits, patientLocation, standeeName, standeeNumber } = req.body;

  // Find matching donors based on blood group and location
  Donor.find({ bloodGroup: patientBloodGroup, location: patientLocation })
    .then(matchingDonors => {
      // Create a new request blood object
      const newRequestBlood = new RequestBlood({
        patientName,
        patientAge,
        patientBloodGroup,
        patientBloodUnits,
        patientLocation,
        standeeName,
        standeeNumber
      });

      // Save the new request blood object to the database
      return newRequestBlood.save();
    })
    .then(() => {
      // Return the matching donors as JSON
      return Donor.find({ bloodGroup: patientBloodGroup, location: patientLocation }).exec();
    })
    .then(matchingDonors => res.json(matchingDonors))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
