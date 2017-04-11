var express = require('express');
var router = express.Router();

router.get('/addRecord', function(req, res, next) {
  res.render('addRecord');
});

module.exports = router;
