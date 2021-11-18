const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

router.post("/",async(req,res)=>{
    const {name,number,email} = req.body;
    try {
        const contact = new Contact({name,number,email})
        await contact.save();
        res.json(contact)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
})

module.exports = router;