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

router.get('/notes/:id', checkAuth, (req, res, next) => {
  const id = req.params.id

  if (isNaN(parseInt(id))) {
    notFound(res);
    return;
  }

  knex('notes')
    .where('id', id)
    .then((notes) => {
      if (notes.length === 0) {
        notFound(res);
        return;
      }

      console.log(notes[0])
      res.render('notes', {
        notes: notes
      });
    })
});

router.post('/notes', checkAuth, (req, res, next) => {

  let noteBody = req.body.noteBody;

  knex('notes')
    .insert({
      user_id: req.user.userId,
      doctor_id: req.user.userId,
      body: noteBody,
    })
    .then(() => {
      res.status(200);
      res.send('');
    })
})

module.exports = router;
