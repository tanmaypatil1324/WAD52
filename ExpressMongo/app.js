const express= require("express")
const mongoose=require('mongoose')
const url='mongodb+srv://tppatil1324:tanmay@cluster0.vfnztkt.mongodb.net/Mydb'

const app=express()

mongoose.connect(url)
app.use(express.json())
const mydbRouter=require('./Routes/mydbroutes')
app.use('/',mydbRouter)

app.listen(3000,()=>{
    console.log("Server running")
})