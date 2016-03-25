var mongoose = require('mongoose');

var peopleSchema = mongoose.Schema({
	name: String,
	reasonsToHate: [String],
	imgUrl: String
});

var Person = mongoose.model('People', peopleSchema);

module.exports = Person;