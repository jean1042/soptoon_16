var express = require('express');
var router = express.Router();


router.use('/webtoons',require('./webtoons/index'));
router.use('/episodes',require('./episodes/index'));
/* GET home page. */  
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
