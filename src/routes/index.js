var express = require('express');
var router = express.Router();

let db = require("../database/models");
let sequelize = db.sequelize;
const { Op } = db.Sequelize;

let gifResource = require('../requests/gifResources')
router.get('/', function(req, res) {
  gifResource.random().then(function(results){
    // console.log(results.data);
  });
  res.render('index');
});


router.get


module.exports = router;
