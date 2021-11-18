const express = require('express')
const router = express.Router();
const Team = require("../models/Teams")


//route 1 get all team cards
router.get('/',async (req,res)=>{
    try {
     const team = await Team.find({})
     res.json({Team:team})
    } catch (error) {
     console.log(error.message)
     res.status(500).json("Internal server Error")
    }
 })

//route 2 post a team card

 router.post('/',async (req,res)=>{
    const {name,wing,image,profile} = req.body;
    try {
        const team = new Team({name,wing,image,profile})
        await team.save();
        res.json(team)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
})

module.exports = router;