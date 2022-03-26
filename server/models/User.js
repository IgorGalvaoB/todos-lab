const { Schema, model } = require("mongoose")
const userSchema = new Schema(
    {
        name: {
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        passwordHash: {
            type: String, required: true
        },
        todos: [{
            type: Schema.Types.ObjectId, ref: 'Todo'
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = model('User', userSchema)