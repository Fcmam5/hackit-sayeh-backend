var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PlaceSchema = new Schema({	'name' : String,	'personnage' : String,	'type' : String,	'city' : String,	'story' : String,	'xp' : Number,	'date' : String,	'visitors' : [{    type: mongoose.Schema.Types.ObjectId,    ref: 'User'  }],	'language' : String,	'questions' : [{		'text' : {type: String, default: ''},		'choises' : Array,		'correct_choice' : String	  }]});

module.exports = mongoose.model('Place', PlaceSchema);
