'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');
const humps = require('humps');
const jwt = require('jsonwebtoken');
const ev = require('express-validation');
const gapi = require('googleapis')


const SECRET = process.env.JWT_KEY || 'itsasecret';


/* GET users listing. */
router.post('/users/', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users')
        .insert({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          age: req.body.age,
          gender: req.body.gender,
          height: req.body.height,
          weight: req.body.weight,
          hashed_password: hashed_password
        }, '*');
    })
    .then((users) => {
      const user = users[0];

      const token = jwt.sign({
        userId: users[0].id
      }, SECRET);
      res.cookie('token', token, {
        httpOnly: true
      });

      delete user.hashed_password;
      res.send(humps.camelizeKeys(user));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
