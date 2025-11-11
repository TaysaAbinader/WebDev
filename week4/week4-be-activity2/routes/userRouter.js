const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchCar
} = require("../controllers/userControllers");

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:userId
router.get("/:userId", getUserById);

// PUT /users/:userId
router.patch("/:userId", updateUser);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

// Update car using PATCH
// router.patch('/:blogId', patchBlog)

module.exports = router;
