var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

/* Crud Peliculas */
router.get('/', moviesController.movies);
router.get('/recommended', moviesController.recommended);
router.get('/news', moviesController.news);
router.get('/create', moviesController.create)
router.get('/search', moviesController.search)
router.get('/:id', moviesController.show);
router.post('/', moviesController.store)
router.get('/:id/edit', moviesController.edit);
router.put('/:id', moviesController.update);
router.delete('/:id', moviesController.destroy);

router.post("/:id/actor", moviesController.addActor);
router.patch("/:id/actor/:actor_id", moviesController.updateActor);
router.delete("/:id/actor/:actor_id", moviesController.removeActor);


module.exports = router;
