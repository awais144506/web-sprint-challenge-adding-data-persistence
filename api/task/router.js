//Import Files
const express = require('express')
const Task = require('./model')
//Invoke Router
const router = express.Router()

//Get Tasks
router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(tk=>{
        res.status(200).json(tk)
    })
    .catch(next)
})

//Post Tasks
router.post('/',(req,res,next)=>{
    Task.postNewTask(req.body)
    .then(tk=>{
        res.status(201).json(tk)
    })
     .catch(next)
})

//Next Function 
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    })
})

module.exports = router