var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test');
  res.render('index', { title: 'Patrick' });
});

router.get('/test/get=:param', (req, res, next) => {
  console.log(`hit the get enpoint with this info: ${req.params.param}`)
  res.render('index', { title: req.params.param });
});

router.post('/test/post', (req, res, next) => {
  console.log(`hit the post endpoint with this info: ${req.body.params}`)
});

module.exports = router;
