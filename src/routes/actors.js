var express = require('express');
var router = express.Router();
const actorsController = require('../controllers/actorsController');

/* Crud Actors */
router.get('/', actorsController.index);
router.get('/create', actorsController.create)
router.get('/:id', actorsController.show);
router.post('/', actorsController.store)
router.get('/:id/edit', actorsController.edit);
router.put('/:id', actorsController.update);
router.delete('/:id', actorsController.destroy);

module.exports = router;
