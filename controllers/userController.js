const { User } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
};
