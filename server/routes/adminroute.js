const router = require('express').Router();
const user = require('../models/user.model');
const request = require('../models/request.model');
const bcrypt = require('bcrypt')

router.route('/user').get((req, res) => {
  user
    .find()
    .select('-__v -updatedAt -password') // Exclude __v, updatedAt, and password fields
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/request').get((req, res) => {
  request.find().then(requests => res.json(requests)).catch(err => res.status(400).json('Error ' + err));
});
router.route('/user/:id').delete((req, res) => {
  user.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/request/:id').delete((req, res) => {
  request.findByIdAndDelete(req.params.id)
    .then(() => res.json('Request deleted.'))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
