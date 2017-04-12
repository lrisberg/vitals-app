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

/* GET home page. */
router.get('/notes', checkAuth, (req, res, next) => {
  knex('notes')
    .where('user_id', req.user.userId)
    .then((notesFromKnex) => {
      res.render('notes', {
        notes: notesFromKnex
      });
    })
});

router.get('/notes/:recordId', checkAuth, (req, res, next) => {
  const recordId = req.params.recordId;

  if (isNaN(parseInt(recordId))) {
    notFound(res);
    return;
  }

  knex('notes')
    .where('record_id', recordId)
    .then((notes) => {
      if (notes.length === 0) {
        notFound(res);
        return;
      }

      res.render('notes', {
        recordId: recordId,
        notes: notes
      });
    })
});

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

module.exports = router;
