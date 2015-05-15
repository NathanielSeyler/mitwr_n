var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Minitwr' });
});

/* GET inscription page. */
router.get('/inscription',function(req,res,next) {
  res.render('inscription', {title : 'Inscription sur Mintwr'});
});

/*Get contact page*/
router.get('/contact',function(req,res,next) {
  res.render('contact', {title : 'Contact'});
});

module.exports = router;
