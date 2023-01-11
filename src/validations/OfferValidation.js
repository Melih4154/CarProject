const Joi = require("joi");

const createValidation = Joi.object({
  offer_detail: Joi.string(),
  comments: Joi.array(),
  price: Joi.number().required(),
});

const makeComment = Joi.object({
  value: Joi.string().required(),
});

module.exports = {
  createValidation,
  makeComment,
};
