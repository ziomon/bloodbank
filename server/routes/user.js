const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find().select('-email -password') // exclude email and password fields
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post(async (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const bloodGroup = req.body.bloodGroup;
  const location = req.body.location;
  const contactNumber = req.body.contactNumber;
  const email = req.body.email;
  const password = req.body.password;
  const weight = req.body.weight;

  // Hash the password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    age,
    bloodGroup,
    location,
    contactNumber,
    weight,
    email,
    password: hashedPassword // Save the hashed password
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => {
      if (err.code === 11000) {
        return res.status(400).json('Email already exists');
      } else {
        return res.status(400).json('Error: ' + err);
      }
    });
});

module.exports = router;
