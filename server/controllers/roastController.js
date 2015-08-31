var storyCreate = require('../models/roastModel');

module.exports.create = function(req, res){
	console.log(req.body);
	
	var model = storyCreate.getModel();

	var newStory = new model(req.body);
	
	var collectionName = req.body.name;
	console.log(collectionName);

	newStory.save(function(err, result){
		if (!err) {
			res.json("success");
		};
	});
}


module.exports.list = function(req, res){
	//console.log(req.body);

	var model = storyCreate.getModel();
	
	//var collectionName = req.body.name;
	//console.log(collectionName);

	model.find({}, function (err, result) {
        res.json(result);
	});
}



module.exports.story = function(req, res){
	//console.log(req.body);

	var model = storyCreate.getModel(req.params);
	
	//var collectionName = req.body.name;
	//console.log(collectionName);
	
	console.log(req.params.id);

	var data = req.params.id;

	model.find({'_id' : data}, function (err, doc) {
        res.json(doc);
        console.log('value above doc');
        console.log(doc);
	});
}