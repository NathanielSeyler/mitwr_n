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

/*Get confirmation_inscription page*/
router.get('/c_inscription',function(req,res,next) {
  res.render('confirmation_inscription', {title : 'Confirmation Inscription', username:req.body.username});
});


module.exports = router;
