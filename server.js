var express = require('express'),
	  bodyParser = require('body-parser'),
		app				= express(),
		mongoose  = require('mongoose');

	
app.use(express.static('public'));
app.use(bodyParser.json());


var peoplesController = require('./controllers/peoplesController.js')
app.use('/people', peoplesController)

mongoose.connect('mongodb://localhost:27017/hateapp');


mongoose.connection.once('open', function(){
  console.log('connected to mongo');
    app.listen(3000, function(){
        console.log('listen');
    })
})