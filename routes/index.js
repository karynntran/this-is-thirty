var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this is thirty' });
});

router.get('/monthlyphotos', function(req, res, next) {
  res.render('monthlyphotos');
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
