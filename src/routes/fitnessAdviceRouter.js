const fitnessAdviceController = require('../controllers/fitnessAdviceController');
const express = require('express');
const router = express.Router();

router.post('/', function (req, res) {
	fitnessAdviceController
		.insert(req.body)
		.then(function (data) {
			res.status(data.status).send({message: data.message});
		})
		.catch((err) => {
			res.status(err.status).send({message: err.message});
		});
});

router.get('/', function (req, res) {
	fitnessAdviceController
		.get()
		.then(function (data) {
			res.status(data.status).send(data.data);
		})
		.catch(function (err) {
			res.status(data.status).send({message: err.message});
		});
});

router.get('/:calories', (req, res) => {
	fitnessAdviceController
		.getOne(req.params.calories)
		.then((data) => {
			res.status(data.status).send({data: data.data});
		})
		.catch((err) => {
			res.status(err.status).send({message: err.message});
		});
});

module.exports = router;
