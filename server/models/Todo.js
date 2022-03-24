const { Schema, model } = require("mongoose")
const todoSchema = new Schema(
    {
        name:{
            type:String,
            unique:true
        },
        completed:{
            type:Boolean,
            default:false
        },
    },

    {
        timestamps:true,
    }
);

const todo = model('Todo', todoSchema)
module.exports=todo