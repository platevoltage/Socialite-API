const router = require('express').Router();
const { getAllThoughts, createThought, getSingleThought, updateThought } = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);;
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

module.exports = router;