const mongoose = require("mongoose")
const { Schema } = mongoose;


const userSchema = new Schema({
    Firstname: {
        type: String,
        required: true,
      },
    Lastname: {
          type: String,
          required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }, 
},{
    timestamps: true,
  })


  module.exports = mongoose.model("blog", userSchema);