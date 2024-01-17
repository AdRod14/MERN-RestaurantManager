const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

// create new workout
const createWorkout = async (req,res) => {
  const {title,reps,load} =  req.body;

  // add doc to db
  try{
    const workout = await Workout.create({title,reps,load});
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({err:err.message})
  }

  res.json({mssg:'POST a new workout'});
}

// get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}

//get a single workout

const getWorkout = async (req,res) => {
  const {id} = req.params;

  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'workout not found'})
  }
    const workout = await Workout.findById(id);
    if(!workout){
      res.status(404).json({err:'workout not found'})
    }
}

//delete a workout

const deleteWorkout = async (req,res) => {
  const {id} =req.params;

  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'workout not found'})
  }
  const workout = await Workout.findOneAndDelete({_id:id});

  if(!workout){
     return res.status(404).json({err:'workout not found'})
  }

  res.status(200).json({mssg:'workout deleted successfully'})
}

//update a workout

const updateWorkout = async (req,res) => {
  const {id} =req.params;

  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'workout not found'})
  }
  const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body})

  if(!workout){return res.status(404).json({err:'workout not found'});
  }
  res.status(200).json({mssg:'workout updated successfully'});
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
}