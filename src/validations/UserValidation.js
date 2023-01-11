const Joi = require("joi");

const userValidation = Joi.object({
  user_name: Joi.string().min(4),
  mail: Joi.string().email(),
  city: Joi.string().min(3),
  phone: Joi.string().min(10),
  full_name: Joi.string().min(6),
  company_name: Joi.string().min(6),
  tax_number: Joi.string().min(6),
});

const companyValidation = Joi.object({
  user_name: Joi.string().min(4),
  mail: Joi.string().email(),
  city: Joi.string().min(3),
  phone: Joi.string().min(10),
  company_name: Joi.string().min(6),
  tax_number: Joi.string().min(6),
});

module.exports = {
  userValidation,
  companyValidation,
};
