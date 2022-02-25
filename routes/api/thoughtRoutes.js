const router = require('express').Router();
const { 
    getAllThoughts, 
    createThought, 
    getSingleThought, 
    updateThought, 
    deleteThought,
    createReaction, 
} = require('../../controllers/thoughtController');


router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);



module.exports = router;