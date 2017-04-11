const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_KEY || 'itsasecret';

function checkAuth(req, res, next) {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, SECRET, function(err, decoded) {
      if (err) {
        res.setHeader("Content-Type", "text/plain");
        res.status(401);
        res.send('Unauthorized');
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.status(401);
    res.send('Unauthorized');
  }
}

/* GET home page. */
router.get('/records', checkAuth, (req, res, next) => {
  knex('records')
    .where('user_id', req.user.userId)
    .then((recordsFromKnex) => {
      res.render('records', { records: recordsFromKnex });
    })
});

router.patch('/records', checkAuth, (req, res, next) => {
  knex('records')
})

module.exports = router;