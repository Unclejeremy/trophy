const mongoose = require("mongoose")
const { Schema } = mongoose;


const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
      },
    lastname: {
          type: String,
          required: true,
          trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }, 
},{
    timestamps: true,
  })


  module.exports = mongoose.model("User", userSchema);