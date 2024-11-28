//Import Files
const express = require('express')
const Resource = require('./model')
//Invoke the router
const router = express.Router()
//Get Resources
router.get('/',(req,res,next)=>{
    Resource.getResources()
    .then(rs=>{
        res.status(200).json(rs)
    })
    .catch(next)
})
//Post Resources
router.post('/',(req,res,next)=>{
    Resource.postResource(req.body)
    .then(rs=>{
        res.status(201).json(rs)
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
