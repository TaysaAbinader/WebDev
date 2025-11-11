const Car = require('../models/carModel');
const mongoose = require("mongoose");

// GET /cars
const getAllCars = async (req, res) => {
  try {
    //finds all documents in the cars collection, sorts them by creation date (newest first).
    const cars = await Car.find({}).sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
};

// POST /cars
const createCar = async (req, res) => {
  try {
    //creates and saves a new document in MongoDB.
    const newCar = await Car.create({ ...req.body });
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: "Failed to create car", error: error.message });
  }
};

// GET /cars/:carId
const getCarById = async (req, res) => {
  const { carId } = req.params;

  //checks if the ID is a valid MongoDB ObjectId.
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    //retrieves a single document by its id.
    const car = await Car.findById(carId);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve car" });
  }
};

// PUT /cars/:carId
const updateCar = async (req, res) => {
  const { carId } = req.params;

  //checks if the ID is a valid MongoDB ObjectId.
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    //Finds the car by id and updates its fields with req.body.
    const updatedCar = await Car.findOneAndUpdate(
      { _id: carId },
      { ...req.body },
      { new: true } //makes Mongoose return the updated document.
    );
    if (updatedCar) {
      res.status(200).json(updatedCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update car" });
  }
};

// DELETE /cars/:carId
const deleteCar = async (req, res) => {
  const { carId } = req.params;

  //checks if the ID is a valid MongoDB ObjectId.
  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    //removes the document from the database.
    const deletedCar = await Car.findOneAndDelete({ _id: carId });
    if (deletedCar) {
      res.status(200).json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete car" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
