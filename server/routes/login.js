const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

router.route('/').get((req, res) => {
  res.json("Require POST");
});

router.route('/').post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json('Invalid email');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json('Invalid password');
  }
  return res.status(200).json({ 
    name: user.name, 
    email: user.email,
    bloodGroup: user.bloodGroup,
    location: user.location,
    weight:user.weight,
    age:user.age
  });
  
});

module.exports = router;
