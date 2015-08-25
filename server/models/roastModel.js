var mongoose 		= require('mongoose'),
	collectionName 	= require('../controllers/roastController')

module.exports = mongoose.model('Stories',{
	name: String, content: String
})