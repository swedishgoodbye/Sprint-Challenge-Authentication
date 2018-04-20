const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // const passwordHash = password;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = new User({ username, password });

    newUser
    .save()
    .then(saved => {
      res.status(200).json(saved)
    })
    .catch(err => {
      res.status(500).json({err: 'User not created.'})
    })
};

module.exports = {
  createUser
};
