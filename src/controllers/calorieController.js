const calculate = require('fitness-health-calculations');

let calorieController = function () {
	this.get = function (data) {
		let bmr = calculate.bmr(data.gender, data.age, data.height, data.weight);

		return bmr;
	};
};

module.exports = new calorieController();
