var mongoose 		= require('mongoose'),
collectionName 	= require('../controllers/roastController') 

var model = mongoose.model('Stories',{
name: String, content: String
}) ; 


var  getModel = function(){
	return model;
}
exports.getModel = getModel;