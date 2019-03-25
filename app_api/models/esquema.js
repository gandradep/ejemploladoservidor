var mongoose = require('mongoose');
var restaurantSchema = new mongoose.Schema({

	precio:{type:String, required:true},
	platoComida:{type:Number,required:true}
});

var appSchema = new mongoose.Schema({
	nombre:{type:String, required:true},
	tipo:{type:String, required:true},
	mes:{type:String, required:true},
	detalles:[restaurantSchema]
	
});

mongoose.model('App', appSchema);