console.log('hello Davy');
const express= require('express');
const path = require ('path')
const bodyParser =require('body-parser')
const app = express();
const mongoose = require('mongoose')
const todo =require('./models/todo')
console.log('Todo from mongoose =>', mongoose.model('todoSchema'))
mongoose.connect('mongodb://localhost:27017/mongoFirst')

app.use(bodyParser.json())

app.post('/api/create', async(req,res)=>{
  const record = req.body
  console.log(record)
  const response = await todo.create(record);
  console.log(response);
  res.json({status:'ok'})
})
app.use('/',express.static(path.resolve(__dirname,'assets')))
app.listen(13371,()=>{
  console.log('Server Up')
})
