'use strict';

const express = require('express');
const knex = require('../knex');
const humps = require('humps');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');
const gapi = require('googleapis')
const ev = require('express-validation');
const validations = require('../validations/token');

const SECRET = process.env.JWT_KEY || 'itsasecret';

function incorrectCredentials(res) {
  res.status(400);
  res.send('Bad email or password');
}

router.post('/token', ev(validations.post), (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  knex('users')
    .select(['id', 'email', 'hashed_password'])
    .where('email', email)
    .then((users) => {
      if (users.length === 0) {
        incorrectCredentials(res);
        return;
      }
      bcrypt.compare(password, users[0].hashed_password)
        .then(() => {
          const token = jwt.sign({
            userId: users[0].id
          }, SECRET);
          res.cookie('token', token, {
            httpOnly: true
          });
          delete users[0].hashed_password;
          res.setHeader('Content-Type', 'application/json');
          res.status(200);
          res.send(users[0]);
        }, () => {
          incorrectCredentials(res);
        })
    });
});

router.delete('/token', function(req, res, next) {
  res.clearCookie('token');
  res.status(200);
  res.send()

});

module.exports = router;
