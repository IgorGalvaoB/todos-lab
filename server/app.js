const mongoose = require('mongoose')
require('dotenv').config()
const express = require ("express")
const connectDb = require('./config/db.config');
const app = express()
app.use(express.json())
app.use('/todos',require('./routes/todos.routes'))
// Rotas Publicas
app.use('/auth', require('./routes/auth.routes'))
app.listen(process.env.PORT,()=>{
    console.log(`connected to:${process.env.PORT}`)
})


