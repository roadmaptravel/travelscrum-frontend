const express = require('express');

const router = express.Router();

router.get('/card/:city-:country/:datefrom+:datetil', (req, res) => {
	res.render('card', req.params);
});

router.get('/:username', (req, res) => {
	res.render('index', req.params);
});

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
