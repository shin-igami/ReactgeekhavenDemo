const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    madeBy : {
        type: String,
        required: true
    },
    link : {
        type: String,
        required: true
    },
    date :{
        type: Date,
        default : Date.now
    },
    image :{
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    }
})

module.exports=mongoose.model("Project",ProjectSchema)