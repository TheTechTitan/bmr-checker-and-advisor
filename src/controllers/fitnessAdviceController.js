const mongoose = require('../models/dbSchema');
const schema = mongoose.model('fitnessAdvice');

let fitnessAdviceController = function () {
	this.insert = function (data) {
		return new Promise(function (resolve, reject) {
			let fitnessAdvice = schema({
				activityLevel: parseInt(data.activityLevel),
				fitnessAdvice: data.fitnessAdvice,
			});

			fitnessAdvice
				.save()
				.then(function () {
					resolve({status: 200, message: 'Fitness Advice added'});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error :' + err});
				});
		});
	};

	this.get = function () {
		return new Promise(function (resolve, reject) {
			schema
				.find()
				.exec()
				.then(function (data) {
					resolve({status: 200, data: data});
				})
				.catch(function (err) {
					reject({status: 500, message: 'Error :' + err});
				});
		});
	};

	this.getOne = (calories) => {
		let level = 0;

		if (calories <= 1926) {
			level = 1;
		} else if (calories <= 2207) {
			level = 2;
		} else if (calories <= 2351) {
			level = 3;
		} else if (calories <= 2488) {
			level = 4;
		} else if (calories <= 2769) {
			level = 5;
		} else {
			level = 6;
		}

		return new Promise((resolve, reject) => {
			schema
				.find({activityLevel: level})
				.then((data) => {
					resolve({status: 200, data: data});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};
};

module.exports = new fitnessAdviceController();
