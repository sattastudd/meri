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
app.get('/story/:id', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});
app.get('/add', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

app.use(bodyParser());

//this is for posting data


app.get('/storyList', roastController.list);

app.get('/sex/:id', roastController.story);


app.post('/postData', roastController.create);


app.listen(3000, function(){
	console.log("Ready to story");
})

