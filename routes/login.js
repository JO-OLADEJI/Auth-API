const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const { loginValidate } = require('../__validate.js');


router.post('/', async (req, res) => {

  const { error, value } = loginValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let matchedUser;
  matchedUser = await User.findOne({ email: value.email });
  if (!matchedUser) return res.status(400).send('Email not found !');

  const validPass = await bcryptjs.compare(value.password, matchedUser.password);
  if (!validPass) return res.status(400).send('Invalid Password !');

  const token = jwt.sign({ _id: matchedUser._id }, process.env.AUTH_SECRET_TOKEN);
  res.header('auth-token', token).send(token);

});


module.exports = router;