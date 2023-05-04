const express = require("express")
const router = express.Router()
// const Blog = require("../models/blogModel")
// const mongoose = require("mongoose")
const {getAllBlogs, updateBlog, createBlog, deleteBlog, getSingleBlog} = require("../controllers/apiControllers")

// API routes
// GET ALL BLOG POSTS

router.get("/", getAllBlogs)

// POST OR CREATE NEW BLOG POST
router.post("/", createBlog)

// GET A SINGLE BLOG POST
router.get("/:id", getSingleBlog)

    // PUT to update blog post
router.put("/:id", updateBlog)

    // To DELETE blog post
router.delete("/:id", deleteBlog)

module.exports = router









// const express = require("express")
// const router = express.Router()
// const Blog = require("../models/blogModel")
// const mongoose = require ("mongoose")

// API routes
//GET ALL BLOG POSTS

// router.get("/", async (req, res) => {
    //res.send("get all blogs")
//     const blogs = await Blog.find({}).sort({createdAt: -1})

//     res.status(200).json(blogs)
// })

//POST OR CREATE NEW BLOG POST
// router.post("/", async (req, res) =>{ 
//     const {title, body, author} = req.body 
//     try { 
//       const blog = await Blog.create({title, body, author}) 
   // we are using our blog model to create a new document. 
  //     res.status(200).json(blog) 
  //   } catch(error){ 
  //     res.status(400).json({error: error.message}) 
  //   } 
  // })

  //GET A SINGLE BLOG POST
  // router.get("/:id", async (req, res) => {
    //res.send("Iam a single blog")
    // const {id} = req.params

    // CHECK if the id is a valid MongoDB id
    // if(!mongoose.Types.ObjectId.isValid(id)) {
    //     return res.status(404).json({error: "No such blog"})
    // }

    // const singleBlog = await Blog.findById(id);
    
    // if the blog with that id doesn't exist
    // if(!singleBlog) {
    //     return res.status(404).json({error: "No such blog"})
    // }
    // if the blog with that id exist
  //   res.status(200).json(singleBlog)
  // })



// router.post("/", (req, res) => {
//     res.send("create a new blog post")
// })
// router.put("/:id", (req, res) => {
//     res.send("update a particular blog post")
// })
// router.delete("/:id", (req, res) => {
//     res.send("Delete a particular blog post")
// })
// module.exports = router