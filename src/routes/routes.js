const express = require("express");
const routes = express.Router();

const userRouter = require("./userRouter");
const calorieRouter = require("./calorieRouter");
const fitnessAdviceRouter = require("./fitnessAdviceRouter");

routes.use("/user", userRouter);
routes.use("/check-calorie", calorieRouter);
routes.use("/calories", fitnessAdviceRouter);

module.exports = routes;
