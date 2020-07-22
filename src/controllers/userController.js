var mongoose = require('../models/dbSchema');
var schema = mongoose.model('user');

var userController = function () {
	this.insert = function (data) {
		return new Promise(function (resolve, reject) {
			let user = schema({
				name: data.name,
				email: data.email,
				password: data.password,
			});
			user
				.save()
				.then(function () {
					resolve({status: 200, message: 'Added a new user'});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};

	this.get = () => {
		return new Promise((resolve, reject) => {
			schema
				.find()
				.exec()
				.then((data) => {
					resolve({status: 200, data: data});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};

	this.getOne = (email, password) => {
		return new Promise((resolve, reject) => {
			schema
				.find({email: email, password: password})
				.exec()
				.then((data) => {
					resolve({status: 200, data: data});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};

	this.checkEmail = (email) => {
		return new Promise((resolve, reject) => {
			schema
				.find({email: email})
				.exec()
				.then((data) => {
					resolve({status: 200, data: data});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};

	this.deleteOne = (id) => {
		return new Promise((resolve, reject) => {
			schema
				.remove({_id: id})
				.exec()
				.then((data) => {
					resolve({status: 200, message: 'Deleted'});
				})
				.catch((err) => {
					reject({status: 500, message: 'Error:- ' + err});
				});
		});
	};
};

module.exports = new userController();
