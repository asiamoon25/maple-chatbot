const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(res.status(200));
});



module.exports = router;
