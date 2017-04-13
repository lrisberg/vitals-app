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
      for (let record of recordsFromKnex) {
        record.picture = getPictureFilename(record);
      }
      res.render('records', { records: recordsFromKnex });
    })
});

function getPictureFilename(record) {
  switch(record.name) {
    case "Test Results":
      return "results.png";
    case "Prescriptions":
      return "prescription.png";
    case "General Practitioner":
      return "doctor.png";
    case "Dentist":
      return "dentist.png";
    case "Optometrist":
      return "optometrist.png";
    case "Cardiologist":
      return "cardiologist.png";
    case "Orthodontist":
      return "orthodontist.png";
    case "Pediatrician":
      return "pediatrician.png";
    case "Gynecologist":
      return "gynecologist.png";
    case "Pathologist":
      return "pathologist.png";
    case "Urologist":
      return "kidney.png";
    default:
      return '';
  }
}

router.get('/records/add', checkAuth, (req, res, next) => {
  res.render('recordAdd');
})

router.get('/records/:recordId/edit', checkAuth, (req, res, next) => {

  let recordId = req.params.recordId;
  console.log(recordId);

  knex('records')
    .where('id', recordId)
    .then((records) => {
      res.render('recordEdit', {
        record: records[0]
      });
    })
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

router.patch('/records/:id', checkAuth, (req, res, next) => {
  let updatedRecord = req.body;
  let id = req.params.id;

  knex('records')
    .where('id', id)
    .then((records) => {
      if (records.length === 0) {
        notFound(res);
      } else {
        knex('records')
          .where('id', id)
          .update({
            name: updatedRecord.name,
            docname: updatedRecord.docname,
            picture: updatedRecord.picture
          })
        .then(() => {
          res.status(200);
          res.send('');
        })
      }
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
