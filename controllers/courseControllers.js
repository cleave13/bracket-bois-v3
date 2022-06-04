const { User } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((Users) => res.json(Users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            // .populate('friends')
            // .populate('thoughts')
            .then((userData) => {
                if (userData) {
                    res.json(userData)
                }
                else { 
                    res.status(404).json({ message: 'No User with that ID' }) 
                }
            }
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((userData) => {
                if (userData) {
                    res.json(userData)
                }
                else {
                    res.status(404).json({ message: 'No User with this id!' })
                }
            }
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((userData) => {
                if (userData) {
                    User.deleteOne({ _id: req.params.userId })
                }
                else {
                    res.status(404).json({ message: 'No user with that ID' })
                }
            })
            .then(() => res.json({ message: 'User deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
}