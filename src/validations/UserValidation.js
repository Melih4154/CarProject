const Joi = require("joi");

const userValidation = Joi.object({
  user_name: Joi.string().min(4),
  mail: Joi.string().email(),
  city: Joi.string().min(3),
  phone: Joi.string().min(10),
  full_name: Joi.string().min(6),
  company_name: Joi.string().min(6),
  tax_number: Joi.string().min(6),
  address: Joi.string(),
});

const makeComment = Joi.object({
  value: Joi.string().required(),
  star: Joi.number().required(),
});

const updatePassword = Joi.object({
  old_password: Joi.string().required(),
  password: Joi.string().required(),
  password_again: Joi.string().required(),
});

module.exports = {
  userValidation,
  makeComment,
  updatePassword,
};
