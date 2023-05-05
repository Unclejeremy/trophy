const Blog = require("../models/blogModel")
const mongoose = require("mongoose")

const getAllBlogs = async (req, res) => {
    //res.send("get all blogs")
    const blogs = await Blog.find({}).sort({createdAt: -1})

    res.status(200).json(blogs)
}

const getSingleBlog = async (req, res) => {
    //res.send("I am a single blog")
    const {id} = req.params

    // CHECK if the id is a valid MongoDB id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog"})
    }
    const singleBlog = await Blog.findById(id);

    // if the blog with that id doesn't exist
    if(!singleBlog) {
        return res.status(404).json({error: "No such blog"})
    }
    // if the blog with that id doesn't exist
    res.status(200).json(singleBlog)
}

const updateBlog = async (req, res) => {
    //res.send("update a particular blog post")
    const {id} = req.params

    // CHECK if the id is a valid MongoDB id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog"})
    }
    const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body})

    // if the blog with that id doesn't exist
    if(!blog) {
        return res.status(404).json({error: "No such blog"})
    }
    // if the blog with that id doesn't exist
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {
    const {title, body, author} = req.body
    try {
        const blog = await  Blog.create({title, body, author})
     // we are using our blog model to create a new document.
        res.status(200).json(blog)
    }   catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteBlog = async (req, res) => {
    //res.send("Delete a particular blog post")
    const {id} = req.params

    // CHECK if the id is a valid MongoDB id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such blog"})
    }
    //const blog = await Blog.findOneAndUpdate({_id: id}, {...req.body})
    const blog = await Blog.findOneAndDelete({_id: id})

    // if the blog with that id doesn't exist
    if(!blog) {
        return res.status(404).json({error: "No such blog"})
    }
    // if the blog with that id doesn't exist
    res.status(200).json(blog)
}

module.exports = {
    getSingleBlog, updateBlog, createBlog, deleteBlog, getAllBlogs
}