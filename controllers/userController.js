const { User, Thought } = require('../models');

module.exports = {
    // GET all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // GET a single user by its _id and populated thought and friend data
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
            !user
                ? res.status(404).json({message: 'no user with that id'})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // POST create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // PUT update a user by _id
    updateUser(req, res) {
        
    },

    // DELETE a user by _id
    // remove user's associated thoughts
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'no user with that id' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'user and associated thoughts deleted successfully' }))
          .catch((err) => res.status(500).json(err));
      },
    

    // POST to add a new friend to a user's friend list

    // DELETE to remove a friend from user's friend list
};