const Joi = require("joi");

const createValidation = Joi.object({
  brand: Joi.string().required().min(3),
  model: Joi.string().required(),
  year: Joi.number(),
  vehicle_inspection_date: Joi.date(),
  oil: Joi.string(),
  gear: Joi.string(),
  km: Joi.string(),
  vehicle_chassis_no: Joi.string(),
  licence_photo: Joi.string(),
});

module.exports = {
  createValidation,
};
