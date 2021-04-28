const express = require('express');
const router = express.Router();
const auth = require('../__auth.js');
const User = require('../models/User.js');


router.get('/', auth, async (req, res) => {
  const userDetails = await User.findById(req.user._id);
  res.json(userDetails);
});


module.exports = router;