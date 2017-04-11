var express = require('express');
var router = express.Router();

router.get('/addCategory', function(req, res, next) {
  res.render('addCategory');
});

module.exports = router;
