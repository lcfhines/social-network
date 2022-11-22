const { User, Thought } = require('../models');

module.exports = {
    // GET to get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // GET to get a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then ((thought) => 
        !thought
            ? res.status(404).json({message: "no thought with that id"})
            : res.json(thought)
        )
        .catch ((err) => res.status(500).json(err));
    },
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought(req, res) {
        Thought.create(req.body)
        // associate to the user
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                // add thought to user object
                { $addToSet: {thoughts: thought._id }},
                { new: true }
            );
        })
        .then((user) => 
            !user
                ? res.status(404).json({message: 'thought created, but no user with that user id found'})
                : res.json('created the thought 💭')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });  
    },
    // PUT to update a thought by its _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'no thought with this id'})
                : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // DELETE to remove a thought by its _id
    // work backwards and delete from its user
    deleteThought(req, res) {
        Thought.findOneAndRemove(
            { _id: req.params.thoughtId }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'no thought with this id'})
                : User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: {thoughts: req.params.thoughtId }},
                    { new: true }
                )
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'no user with this id'})
                : res.json({ message: 'thought successfully deleted! 🚮'})
        )
        .catch((err) => res.status(500).json(err));
    },
    // POST to create a reaction stored in a single thought's reactions array field
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // add reaction to the thought
            { $addToSet: { reactions: req.body }},
            // return updated thought with the new reaction
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'no thought with this id'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // DELETE to pull and remove a reaction byt he reactionId value
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // reaction nested in thought, need to remove specific reaction
            { $pull: { reactions: { reactionId: req.params.reactionId} }},
            // return updated thought (without the reaction)
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'no thought with this id'})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
};