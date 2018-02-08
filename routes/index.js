var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
  res.render('login');
});

router.get('/register',function(req,res){
  res.render('register');
});

router.get('/l1',function(req,res){
  res.render('login2');
});
module.exports = router;
