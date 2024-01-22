const route=require("express").Router()
const {data}=require('./data')

route.get('/blog',data)

module.exports={route}