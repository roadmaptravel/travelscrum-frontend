const express = require('express');
const got = require('got');
const router = express.Router();

router.get('/advice', async (req, res, next) => {
	try {
		const response = await got('https://travelscrum.herokuapp.com/api', {
		    searchParams: req.query
		});
		
		const obj = JSON.parse(response.body);
		res.render('advice', obj);
	} catch (err) {
		next(err);
	}
});

router.get('/entry', (req, res) => {
	res.render('entry', req.params);
});

router.get('/klmdetails', (req, res) => {
	res.render('klmdetails');
});

router.get('/healthkit', async (req, res, next) => {
	try {
		const response = await got('http://tool.getroadmap.com/api/travelpolicy/');
		const obj = JSON.parse(response.body);
		res.render('healthkit', { "policy": obj.result });
		
	} catch (err) {
		next(err);
	}
});


router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
