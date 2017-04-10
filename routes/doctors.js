var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/doctors', function(req, res, next) {
  res.render('doctors', { title: 'Doctors' });
});

module.exports = router;
