const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0]);

    //Separated .send requests.
    await api
      .post("/api/workouts")
      .set("Authorazation", "bearer" + token)
      .send(workouts[1]);
  });

  test("single workout can be accessed by id", async () => {
    const workoutsAtStart = await Workout.find({});
    const workoutToView = workoutsAtStart[0];

    const response = await api
      .get(`/api/workouts/${workoutToView._id}`)
      .set("Authorazation", "bearer" + token)
      .expect(200)
      .expect("Content-Type", "/application\/json/");

    expect(response.body.title).toBe(workoutToView.title);
    expect(response.body.reps).toBe(workoutToView.reps);
    expect(response.body.load).toBe(workoutToView.load);
  });

  test("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });

  test("a workout can be updated", async () => {
    const workoutsAtStart = await Workout.find({});
    const workoutToUpdate = workoutsAtStart[0];

    const updatedData = {
      title: workoutToUpdate.title,
      reps: workoutToUpdate.reps + 5,
      load: workoutToUpdate.load + 10,
    };

    const response = await api
      .put(`/api/wprkouts/${workoutToUpdate._id}`)
      .set("Authorization", "bearer" + token)
      .send(updatedData)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body.reps).toBe(updatedData.reps);
    expect(response.body.load).toBe(updatedData.load);

    const workoutFromDb = await Workout.findById(workoutToUpdate._id);
    expect(workoutFromDb.reps).toBe(updatedData.reps);
    expect(workoutFromDb.load).toBe(updatedData.load);
  });

  test("a workout can be deleted", async () => {
    const workoutsAtStart = await Workout.find({});
    const workoutToDelete = workoutsAtStart[0];

    await api
      .delete(`/api/workouts/${workoutToDelete._id}`)
      .set("Authorization", "bearer" + token)
      .expect(204);

    const workoutInDb = await Workout.findById(workoutToDelete._id);
    expect(workoutInDb).toBeNull();
  });

});



afterAll(() => {
  mongoose.connection.close();
});
