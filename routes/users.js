var express = require('express');
var router = express.Router();
const routFunction = require('../controllers/router-functions')

//Root route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Add user data
router.post('/person',routFunction.addData)

//Get user data
router.get('/person',routFunction.getData)

module.exports = router;
