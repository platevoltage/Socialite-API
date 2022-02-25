const { Thought, User } = require('../models/');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      // .select('')
      // .populate('')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body }
    )
      // .select('')
      // .populate('')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: dbThoughtData._id} },
          { new: true }
        );
      })
      .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'Thought created, but found no user with that ID' })
        : res.json('Created the Thought!!!!')
    )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  }
};
