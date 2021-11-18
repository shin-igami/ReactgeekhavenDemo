const express = require('express')
const router = express.Router();
const Project = require('../models/Projects')


//route 1 get all project cards
router.get('/',async (req,res)=>{
    try {
     const project = await Project.find({})
     res.json({Project:project})
    } catch (error) {
     console.log(error.message)
     res.status(500).json("Internal server Error")
    }
 })

//route 2 post a project card

 router.post('/',async (req,res)=>{
    const {title,madeBy,link,image,description} = req.body;
    try {
        const project = new Project({title,madeBy,link,image,description})
        await project.save();
        res.json(project)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
})

module.exports = router;