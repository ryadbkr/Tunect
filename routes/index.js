var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Notre petite entreprise' ,
    paragraphe: 'Connait pas la crise',
    button:'visitez-nous'});
});

module.exports = router;
