var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Model = new Schema({
	title: {
		type: String
	},
	desc: {
		type: String
	},
	comment: {
		type: String
	}
});

var model = mongoose.model("Model", Model);
module.exports = model;