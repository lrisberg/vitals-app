var express = require('express');
var router = express.Router();

router.get('/addDoc', function(req, res, next) {
  res.render('addDoc');
});

module.exports = router;
