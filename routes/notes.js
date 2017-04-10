var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/notes', function(req, res, next) {

  knex('notes')
    .then((notesFromKnex) => {
      res.render('notes', { notes: notesFromKnex });
    })
});

module.exports = router;
