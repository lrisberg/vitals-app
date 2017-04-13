var express = require('express');
var router = express.Router();
const gapi = require('googleapis')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vitals' });
});

module.exports = router;
