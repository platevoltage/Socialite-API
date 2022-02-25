const router = require('express').Router();
const { getAllUsers, createUser, getSingleUser, updateUser } = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser);

module.exports = router;