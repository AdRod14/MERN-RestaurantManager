const User = require('../models/userModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
 return jwt.sign({_id}, process.env.SECRET, {expiresIn:'2d'});
}

const loginUser = async(req, res) => {
  const {username, password} = req.body;
  try{
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({user, token})
  } catch (err) {
    res.status(400).json({err:err.message})
  }
}

// const signupUser = async(req,res) => {
//   const {username, password, email} = req.body;
//   try{
//     const user = await User.signup(username,password, email);
//     const token = createToken(user._id);
//     res.status(200).json({user, token})
//   } catch (err) {
//     res.status(400).json({err:err.message})
//   }

// }
//get all users
const getUsers = async(req,res) => {
    const users = await User.find({});
    res.status(200).json(users)
}

//get a single user
const getUser = async(req,res)=> {
  const {id} = req.params;
  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'Usuario no encontrado'})
  }
  const user = await User.findById(id);
  if(!user){
    res.status(404).json({err:'Usuario no encontrado'})
  }
  res.status(200).json(user);
}


const updateUser = async(req,res)=> {
  const {id} = req.params;
  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'Usuario no encontrado'})
  }
  const user = await User.findOneAndUpdate({_id:id}, {...req.body});
  if(!user){
    res.status(404).json({err:'Usuario no encontrado'})
  }
  res.status(200).json({mssg:'Usuario actualizado correctamente'});
}

const deleteUser = async(req,res)=>{
  const {id} = req.params;
  //validate id
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({err:'usuario no encontrado'})
  }
  const user = await User.findByIdAndDelete(id);
  if(!user){
    res.status(404).json({err:'usuario no encontrado'})
  }
  res.status(200).json({mssg:'Usuario eliminado correctamente'});
}

const createUser = async(req,res)=>{
  const {username, password, email, name} = req.body;
  try{
    const user = await User.signup(username, password, email, name);
    res.status(200).json({user});
  } catch(err){
    res.status(404).json({err:err.message});
  }
}

module.exports = {loginUser, getUsers, getUser, updateUser, deleteUser, createUser}

