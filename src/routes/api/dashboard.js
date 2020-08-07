var express = require('express');
var router = express.Router();
const dashboardApiController = require('../../controllers/api/dashboardApiController');

router.get('/widgets', dashboardApiController.widgets);
router.get('/products', dashboardApiController.products);
router.get('/lastproduct', dashboardApiController.lastProduct);
router.get('/categories', dashboardApiController.categories);

module.exports = router;
