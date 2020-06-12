const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');

});

router.get('/yolo', (req, res) => {
	res.send ('YOLO!');
})

module.exports = router;
