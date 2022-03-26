const { Router } = require("express")
const Todo = require("../models/User")
const router = Router()

router.post('/singnup', (req,res)=>{
    const { username, password } = req.body
})