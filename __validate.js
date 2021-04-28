const Joi = require('joi');


const registerValidate = (user) => {
  const schema = Joi.object({
    firstname: Joi.string().min(2).max(255).required(),
    lastname: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(2).max(512).email().required(),
    password: Joi.string().min(6).max(1024).required()
  });

  return schema.validate(user);
}


const loginValidate = (user) => {
  const schema = Joi.object({
    email: Joi.string().min(2).max(512).email().required(),
    password: Joi.string().min(6).max(1024).required()
  });

  return schema.validate(user);
}


module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;