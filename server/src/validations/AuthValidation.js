const Joi = require("joi");

const loginUserValidation = Joi.object({
  user_name: Joi.string().min(4),
  mail: Joi.when("user_name", {
    is: Joi.string().valid(null, ""),
    then: Joi.string()
      .email()
      .required()
      .label("Kullanıcı adı veya mail adresi giriniz."),
  }),
  password: Joi.string().required().min(5),
});

const registerUserValidation = Joi.object({
  user_name: Joi.string().required().min(4),
  mail: Joi.string().email().required(),
  password: Joi.string().required().min(5),
  full_name: Joi.string().required().min(5),
  id_number: Joi.string().required().min(11),
});

module.exports = {
  loginUserValidation,
  registerUserValidation,
};
