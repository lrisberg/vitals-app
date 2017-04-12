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
router.get('/records', checkAuth, (req, res, next) => {
  knex('records')
    .where('user_id', req.user.userId)
    .then((recordsFromKnex) => {
      res.render('records', { records: recordsFromKnex });
    })
});

router.get('/records/add', checkAuth, (req, res, next) => {
  res.render('recordAdd');
})

router.get('/records/:recordId/edit', checkAuth, (req, res, next) => {

  let recordId = req.params.recordId;
  console.log(recordId);

  res.render('recordEdit');
})

router.get('/records/:recordId', checkAuth, (req, res, next) => {
  const recordId = req.params.recordId;

  if (isNaN(parseInt(recordId))) {
    notFound(res);
    return;
  }

  knex('notes')
    .where('record_id', recordId)
    .then((notes) => {

      res.render('recordDetails', {
        recordId: recordId,
        notes: notes
      });
    })
});

router.post('/records', checkAuth, (req, res, next) => {
  let newRecord = req.body;

  knex('records')
    .insert({
      name: newRecord.name,
      docname: newRecord.docname,
      picture: newRecord.picture,
      user_id: req.user.userId
    })
    .then(() => {
      res.status(200);
      res.send('');
    })
})

router.delete('/records/:id', checkAuth, (req, res, next) => {

  let id = req.params.id;

  knex('records')
    .where('id', id)
    .del()
    .then(() => {
      res.status(200);
      res.send('');
    });
});

module.exports = router;
