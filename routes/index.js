const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});

router.get('/yolo', (req, res) => {
	res.send ('YOLO!');
})

module.exports = router;
