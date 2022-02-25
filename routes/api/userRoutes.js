const router = require('express').Router();
const { getAllUsers, createUser, getSingleUser, updateUser, deleteUser, addFriend } = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;