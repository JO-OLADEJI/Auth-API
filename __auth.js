const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {

  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied !');

  try {
    const verified = jwt.verify(token, process.env.AUTH_SECRET_TOKEN);
    req.user = verified;
    next();
  }
  catch (error) {
    return res.status(400).send('Invalid Token !');
  }

}


module.exports = auth;