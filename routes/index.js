const express = require('express');
const got = require('g');
const router = express.Router();

router.get('/advice', async (req, res, next) => {
	try {
		const response = await got('https://travelscrum.herokuapp.com/api/', req);
		const obj = JSON.parse(response.body);
		res.render('advice', obj);
	} catch (err) {
		next(err);
	}
});

// router.get('/advice', async (req, res, next) => {
// 	try {
// 		const response = await got('https://travelscrum.herokuapp.com/api/?cityName=' + req.destination);
// 		const obj = JSON.parse(response.body);
// 		res.render('advice', obj);
// 	} catch (err) {
// 		next(err);
// 	}
// });

router.get('/entry', (req, res) => {
	res.render('entry', req.params);
});

router.get('/healthkit', (req, res) => {
	res.render('healthkit', req.params);
});


router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
