const router = require('express').Router();
const { getAllUsers } = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);


module.exports = router;