const mongoose= require('mongoose')
const todoSchema = new mongoose.Schema({
  record :{ type:String , required : true},
  date:{type:Number, required: true, default : 100}

})
const model = mongoose.model('todoSchema',todoSchema)
 module.exports= model;
