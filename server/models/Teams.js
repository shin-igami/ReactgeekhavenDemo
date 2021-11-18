const mongoose = require('mongoose')

const TeamsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    wing : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    profile :{
        type: String,
        required: true
    }
})

module.exports= mongoose.model("Team",TeamsSchema);