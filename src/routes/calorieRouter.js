const calorieController = require('../controllers/calorieController');
const express = require('express');
const router = express.Router();

router.get('/:gender/:age/:height/:weight', (req, res) => {
	let data = {
		gender: req.params.gender,
		age: parseInt(req.params.age),
		height: parseFloat(req.params.height),
		weight: parseFloat(req.params.weight),
	};

	let bmr = calorieController.get(data);

	res.status(200).send({data: bmr});
});

module.exports = router;
