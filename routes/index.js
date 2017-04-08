var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('login', { title: 'Express' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> e0e6578ce489e2fe04f8032513dea443b2632bb9
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
})

module.exports = router;
