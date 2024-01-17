const express = require('express');
const {createWorkout,getWorkouts,getWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController');
const router = express.Router();

// Get all workouts
router.get('/', getWorkouts);

// Create a new workout
router.post('/', createWorkout);

// Get a specific workout by ID
router.get('/:id', getWorkout);

// Update a workout by ID
router.patch('/:id', updateWorkout);

// Delete a workout by ID
router.delete('/:id', deleteWorkout);

module.exports = router;
