const Joi = require("joi");

const createValidation = Joi.object({
  demand_detail: Joi.string(),
  product_id: Joi.string().required().min(8),
  vehicle_id: Joi.string().required().min(8),
});

const makeComment = Joi.object({
  value: Joi.string().required(),
});

module.exports = {
  createValidation,
  makeComment,
};
