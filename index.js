const express=require('express')
const app =express()
const {route}=require('./route')
const cors=require('cors')

app.use(cors({
    origin:"*"
}))

app.use('/api',route)
app.listen(4000,()=>{
    console.log("Server Started")
})