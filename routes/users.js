'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../knex');

/* GET users listing. */
router.post('/users', (req, res, next) => {
  console.log('hey');
})

module.exports = router;
