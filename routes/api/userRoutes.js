const router = require('express').Router();
const { getAllUsers, createUser, getSingleUser } = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);;
router.route('/:userId').get(getSingleUser);

module.exports = router;