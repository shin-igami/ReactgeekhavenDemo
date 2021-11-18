const express = require('express')
const router = express.Router();
const Blog = require('../models/Blogs')


//route 1 get all blog cards
router.get('/',async (req,res)=>{
    try {
     const blog = await Blog.find({})
     res.json({Blog:blog})
    } catch (error) {
     console.log(error.message)
     res.status(500).json("Internal server Error")
    }
 })

//route 2 post a blog card

 router.post('/',async (req,res)=>{
    const {title,author,link,image,description} = req.body;
    try {
        const blog = new Blog({title,author,link,image,description})
        await blog.save();
        res.json(blog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
})

module.exports = router;