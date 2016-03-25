var express = require('express');
var router  = express.Router();
var Person  = require('../models/peoplesModel.js')

router.get('/', function(req, res) {
	Person.find({}, function(err, people){
		res.json(people)
	})
})


//handle submission of new target data
router.post('/', function(req, res){
    //use req.body to get data of new target
    var newPerson = new Person(req.body);
    newPerson.save(function(err, data){
        //once save happens, send back saved object
        res.send(data);
    });
});


module.exports = router; 





// router.get('/', function(req, res){
//     //go get all targets from mongo
//     Target.find({}, function(err, targets){
//         //once data returns from mongo, send it out as JSON
//         res.json(targets);
//     });
// });








