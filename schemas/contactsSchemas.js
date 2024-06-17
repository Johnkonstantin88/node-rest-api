const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `Name field is required`,
  }),
  email: Joi.string().required().messages({
    "any.required": `Email field is required`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `Phone field is required`,
  }),
});

const updateContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `Name field is required`,
  }),
  email: Joi.string().required().messages({
    "any.required": `Email field is required`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `Phone field is required`,
  }),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
};
