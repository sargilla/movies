var express = require('express');
var router = express.Router();
const moviesApiController = require('../../controllers/api/moviesApiController');

router.get('/', moviesApiController.index);
router.get('/recommended', moviesApiController.recommended);
router.get('/news', moviesApiController.news);
router.get('/search', moviesApiController.search)
router.get('/:id', moviesApiController.show);
router.post('/', moviesApiController.store);
router.put('/:id', moviesApiController.update);

module.exports = router;
