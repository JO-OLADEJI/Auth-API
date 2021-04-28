const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User.js');
const { registerValidate } = require('../__validate.js');


router.post('/', async (req, res) => {

  const { error, value } = registerValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let emailExist;
  emailExist = await User.findOne({ email: value.email });
  if (emailExist) return res.status(400).send('Email already exists !');

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(value.password, salt);

  const user = new User({
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } 
  catch(error) {
    res.send('An error occured. Please try again :(');
  }

});


module.exports = router;