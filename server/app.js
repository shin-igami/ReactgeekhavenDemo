const express = require('express')
const mongoose = require('mongoose')
const DB ='mongodb+srv://societyWebsite:societywebsite@cluster0.hgvok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use("/teams",require('./routes/teams'))
app.use('/blogs',require('./routes/blogs'))
app.use('/projects',require('./routes/projects'))
app.use('/contacts',require('./routes/contact'))

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to Database")
}).catch((err)=>{
    console.log(err.message);
})

app.listen(5000,()=>{
    console.log(`listening on 5000`)
})