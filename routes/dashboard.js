var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.cookies.token) {
    res.header('Content-Type', 'text/plain');
    res.status(401).send('Unauthorized');
  }
  else {
  res.render('index', { title: 'Welcome!' });
}
});

module.exports = router;
