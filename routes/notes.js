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
router.get('/notes', checkAuth, (req, res, next) => {
  console.log(req.user.userId);
  knex('notes')
    .where('user_id', req.user.userId)
    .then((notesFromKnex) => {
      res.render('notes', { notes: notesFromKnex });
    })
});

router.get('/notes/:id', checkAuth, (req, res, next) => {
  const id = req.params.id
  knex('notes')
    .where('id', id)
    .then((note) => {
      console.log(note)
      res.render('notes', { notes: note[0]});
    })
});

module.exports = router;
