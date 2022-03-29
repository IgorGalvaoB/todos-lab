const { Schema, model } = require("mongoose")
const todoSchema = new Schema(
    {
        name:{
            type:String,
        },
        completed:{
            type:Boolean,
            default:false
        },
        user:{
            type:Schema.Types.ObjectId,ref:'User'
        }
    },

    {
        timestamps:true,
    }
);

const todo = model('Todo', todoSchema)
module.exports=todo