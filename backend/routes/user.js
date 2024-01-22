const express = require('express');
const router = express.Router();
const {loginUser, getUsers,getUser, updateUser, createUser, deleteUser} = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

//login route
router.post('/login', loginUser);


//get all users
router.get('/', getUsers);

//get a user
router.get('/:id', getUser);

//update a user
router.put('/:id', updateUser)

//create an user
router.post('/', createUser);

//delete an user
router.delete('/:id', deleteUser)

module.exports = router;