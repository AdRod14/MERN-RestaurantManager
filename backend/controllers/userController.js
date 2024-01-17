const User = require('../models/userModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
 return jwt.sign({_id}, process.env.SECRET, {expiresIn:'2d'});
}

const loginUser = async(req, res) => {
  const {username, password} = req.body;
  try{
    const user = await User.loginUser(username, password);
    const token = createToken(user._id);
    res.status(200).json({user, token})
  } catch (err) {
    res.status(400).json({err:err.message})
  }
}

const signupUser = async(req,res) => {
  const {username, password, email} = req.body;
  try{
    const user = await User.signupUser(username,password, email);
    const token = createToken(user._id);
    res.status(200).json({user, token})
  } catch (err) {
    res.status(400).json({err:err.message})
  }

}

const getUsers = async(req,res) => {
  try{
    const users = await User.find();
    res.status(200).json({users})
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = {loginUser, signupUser, getUsers}

