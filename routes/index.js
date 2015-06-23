var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = __dirname + '/object.json';
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
  jsonData = JSON.parse(data);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this is thirty', script: jsonData.script['index']});
});

router.get('/monthlyphotos', function(req, res, next) {
  res.render('monthlyphotos', { script: jsonData.script['monthlyPhotos'],months: jsonData.months });
  // res.render('monthlyphotos', {jsonData: '../javascripts/object.js'});
});

/* GET bucketlisttest list */
router.get('/bucketlisttest', function(req,res){
	var db = req.db;
	var collection = db.get('bucketlisttest');
	collection.find({},{},function(e,docs){
		res.render('bucketlisttest', {
			'bucketlisttest' : docs
		});
	});
});

module.exports = router;
