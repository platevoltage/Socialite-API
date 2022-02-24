const router = require('express').Router();
const { getAllThoughts, createThought, getSingleThought } = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);;
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;