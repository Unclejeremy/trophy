const mongoose = require("mongoose")
const { Schema } = mongoose;


const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
    author: {
          type: String,
          required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
      },
},{
    timestamps: true,
  })


  module.exports = mongoose.model("blog", BlogSchema);