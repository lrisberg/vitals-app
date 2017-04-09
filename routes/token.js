'use strict';

const express = require('express');
const knex = require('../knex');
const humps = require('humps');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');

const SECRET = process.env.JWT_KEY || 'itsasecret';

router.post('/token', (req, res, next) => {
  let credentials = req.body;
  let email = credentials.email;
  let password = credentials.password;

  knex('users')
    .select(['id', 'email', 'hashed_password'])
    .where('email', email)
    .then((users) => {
      if (users.length === 0) {
        res.setHeader("Content-Type", "plain/text");
        res.status(400);
        res.send('Bad email or password');
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
          const user = users[0];
          delete user.hashed_password;
          res.send(humps.camelizeKeys(user));
        }, () => {
          res.setHeader('Content-Type', 'plain/text');
          res.status(400);
          res.send('Bad email or password');
        });
    })
})

module.exports = router;
