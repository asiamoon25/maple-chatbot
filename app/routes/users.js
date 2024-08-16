const express = require('express');
const router = express.Router();
const userService = require('../services/api/userApiService.js');
require('dotenv').config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*
get user ocid
 */
router.get('/:id/ocid',(req,res) => {

  const userId = req.params.id;

  const ocid = userService.getOcidByUserId(userId);

});

module.exports = router;
