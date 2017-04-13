'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    first_name: Joi.string().label('First Name').required().trim(),
    last_name: Joi.string().label('Last Name').required().trim(),
    email: Joi.string().label('Email').email().required().trim(),
    password: Joi.string().label('Password').min(7).strip().required(),
    age: Joi.number().integer().label('Age').required(),
    weight: Joi.string().label('Weight').required().trim(),
    height: Joi.string().label('Height').required().trim()
  }
};
