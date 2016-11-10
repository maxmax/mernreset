var express = require('express');
var router = express.Router();

var basedate = { title: 'Base Page' };

router.get('/', function(req, res) {
  var title = "This Base";
  var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];
  var tagline = "This base page";
  //response.render('base/index', basedate);
  res.render('base/index', {
    title: title,
    drinks: drinks,
    tagline: tagline
  });
});

router.get('/buddy', function(req, res, next) {
  var title = "This Buddy";
  res.render('base/buddy', {
    title: title
  });
});

module.exports = router;
