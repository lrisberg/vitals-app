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

function notFound(res) {
  res.setHeader("Content-Type", "text/plain");
  res.status(404);
  res.send('Not Found');
}

router.post('/notes', checkAuth, (req, res, next) => {

  let recordId = req.body.recordId;
  let noteBody = req.body.noteBody;

  knex('notes')
    .insert({
      record_id: recordId,
      body: noteBody
    })
    .then(() => {
      res.status(200);
      res.send('');
    })
})

router.delete('/notes/:id', checkAuth, (req, res, next) => {

  let id = req.params.id;

  knex('notes')
    .where('id', id)
    .del()
    .then(() => {
      res.status(200);
      res.send('');
    });
});

module.exports = router;
