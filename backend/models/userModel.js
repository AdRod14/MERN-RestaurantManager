const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new Schema({
  
  username:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  name:{
    type:String,
    required:true
  },
})

userSchema.statics.signup = async function(username,password, email,name) {
  //validation
  if(!username || !password || !email || !name){
    throw Error('Favor de llenar todos los campos')
  }
  //validate password length
  if(password.length < 6){
    throw Error('La contraseña debe tener al menos 6 caracteres')
  }
  //validate email
  if(!validator.isEmail(email)){
    throw Error('Email invalido')
  }

  const exists = await this.findOne({username})
  if(exists){
    throw Error('Usuario ya existe, escoger otro.');
  }
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password,salt);

  const user = await this.create({username,password:hash,email,name});

  return user;
  
}


userSchema.statics.login = async function(username, password) {
  //validation
  if(!username || !password){
    throw Error('Please fill in all fields')
  }
  const user = await this.findOne({username})

  if(!user){
    throw Error('User does not exist')
  }
  const match = await bcrypt(password, user.password );
  if(!match){
    throw Error ('Incorrect password');
  }
  return user;
}

module.exports = mongoose.model('User',userSchema)
