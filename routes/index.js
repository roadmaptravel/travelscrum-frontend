const express = require('express');

const router = express.Router();

router.get('/advice', (req, res) => {
	res.render('advice', req.params);
});

router.get('/entry', (req, res) => {
	res.render('entry', req.params);
});


router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
