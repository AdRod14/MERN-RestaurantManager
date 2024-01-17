const express = require('express');
const router = express.Router();
const {loginUser, signupUser, getUsers} = require('../controllers/userController');

//login route
router.post('/login', loginUser);


//signup route
router.post('/signup', signupUser);

//get all users
router.get('/api/users', getUsers);