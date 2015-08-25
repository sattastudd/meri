console.log("Preparing the Barbeque");

var express 			= require('express'),
		app 			= express(),
		bodyParser		= require('body-parser'),
		mongoose		= require('mongoose'),
		fs 				= require('fs'),
		http 			= require('http').Server(app),
		roastController = require('./server/controllers/roastController');

mongoose.connect('mongodb://localhost:27017/sexstory');

app.engine('html', require('ejs').renderFile); //TODO npm install ejs
app.set('view engine', 'html');

app.use('/', express.static(__dirname + '/client'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});
app.get('/story', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});
app.get('/add', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

//this is for using js files
app.use('/appResources', express.static(__dirname + '/client/appResources'));

app.use(bodyParser());

//this is for posting data
app.post('/postData', roastController.create);

app.get('/storyList', roastController.find);

app.get('/story', roastController.find);


app.listen(3000, function(){
	console.log("Ready to story");
})

