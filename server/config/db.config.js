const mongoose = require("mongoose")

const connection = async ()=>{
    const connectDb = await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected to: ${connectDb.connections[0].name}`)
}

module.exports=connection()