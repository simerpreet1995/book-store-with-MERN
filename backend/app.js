const express = require('express')
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const app = express();

// middlewares

// app.use('/',(req,res,next)=>{
//     res.send("This is our starting of our app")
// })
app.use(express.json())

app.use("/books", router)

const url = "mongodb+srv://Simer:Simer2311@bookstorecluster.bsd7cwp.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then(()=>console.log("Connected to database"))
.then(()=> {
    app.listen(5000)
})
.catch((err)=> console.log(err))