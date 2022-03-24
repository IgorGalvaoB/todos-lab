const { Router } = require("express")
const Todo = require("../models/Todo")
const router = Router()
router.post("/",async (req,res)=>{
    try {
        const newTodo = await Todo.create(req.body)
        res.status(201).json(newTodo)
        
    } catch (error) {
        res.status(201).json({error:error.message})
    }
})
router.get("/",async(req,res)=>{
    try {
        const allTodos = await Todo.find()
        res.status(200).json(allTodos)
    } catch (error) {
        res.status(201).json({error:error.message})
    }
})
router.patch("/:id",async(req,res)=>{
    const { id } = req.params;
    const payload = req.body;
    try {
        const updateTodo = await Todo.findByIdAndUpdate(id,payload,{new:true})
        res.status(200).json(updateTodo)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        await Todo.findByIdAndDelete(id)
        res.status(204).json()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router;