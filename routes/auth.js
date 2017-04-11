var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/testimonials', function(req, res, next) {
  res.render('testimonials');
});

module.exports = router;
