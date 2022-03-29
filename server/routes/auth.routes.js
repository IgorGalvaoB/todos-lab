const { Router } = require("express")
const User = require('../models/User')
const router = Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/singnup', async (req,res)=>{
    const { name, password,email } = req.body
    console.log(name,password,email)
    try {
        const user = await User.findOne({email})
        if(user){
            res.status(400).json({message: 'User already exists'})
        }
        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = await User.create({
            name: name,   
            password: hashPassword,
            email: email,
        })
        res.status(201).json({message: 'User created', name:name,email:email,hashPassword:hashPassword})

    } catch (error) {
        res.status(502).json({ msg: error.message })
    }
})
module.exports = router