const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cuentasSchema = new Schema({
  tableNum:{
    type:Number,
    required:true
  },
  userId:{
    type:String,
    required:true
  },
  total:{
    type:Number,
    required:true
  },
  completed:{
    type:Boolean,
    required:true
  },
  items:{
    type:Array,
    required:true
  }
});

cuentasSchema.statics.createCuenta = async function(tableNum, userId, total, completed, items) {
  //validation
}

module.exports = mongoose.model('Cuentas', cuentasSchema);