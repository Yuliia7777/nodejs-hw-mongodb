import Joi from 'joi';

export const registerAuthUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export const loginAuthUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});
