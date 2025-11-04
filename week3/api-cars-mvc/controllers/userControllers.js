const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({...req.body});
  return newUser ? res.json(newUser) : res.json({message: "Unable to create new User."});
  };

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = User.findById(userId);
  return user ? res.json(user) : res.json({message: "Unable to find User."});
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = User.updateOneById(userId, {...req.body});
  return user ? res.json(user) : res.json({message: "Unable to update User."});
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = User.findById(userId);
  const userDeleted = User.deleteOneById(userId);
  return userDeleted ? res.json({message: "User deleted.", user}) : res.json({message: "Unable to delete User."});
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
