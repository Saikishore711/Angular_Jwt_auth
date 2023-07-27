const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const routes = require('./routes/routes')
const app = express()



app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))
app.use(cookieParser())

app.use(express.json())
app.use("/api",routes)

mongoose.connect("mongodb://0.0.0.0:27017/jwtproject",{
    useNewUrlParser:true,
    
})
.then(()=>{
    console.log("connected to database")
    app.listen(5000,()=>{
        console.log("App is running on port 5000")
    })
})