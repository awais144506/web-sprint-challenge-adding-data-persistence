//Import Files
const express = require('express')
const projectRouter = require('./project/router')
//Server Invoke Express
const server = express()
//Server Use
server.use(express.json())
server.use('/api/projects',projectRouter)

server.get('/',(req,res)=>{
    res.send("Hello Buddy I am Live Now !!!!")
})


module.exports = server