const mongoose = require('mongoose');
const schema = mongoose.Schema;

let user = new schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

let fitnessAdvice = new schema({
	activityLevel: {
		type: Number,
		required: true,
	},
	fitnessAdvice: {
		type: String,
		required: true,
	},
});

mongoose.model('user', user);
mongoose.model('fitnessAdvice', fitnessAdvice);

module.exports = mongoose;
