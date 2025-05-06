const express = require('express')
const app= express()
const bodyparser = require('bodyparser')
const ejs = require('ejs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/list')
app.use(express.json())
app.set('view engine',ejs)
app.use(bodyparser.urlencoded({extended:true}))

require('./model/Todo')
app.use(require('./routes/todo'))

app.listen('3000',()=>{
    console.log("Server listening")
})
