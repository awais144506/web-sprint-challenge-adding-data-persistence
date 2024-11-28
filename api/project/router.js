//Import Files
const express = require('express')
const Project = require('./model')
//Router Invoke
const router = express.Router()

// Get Project API
router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(pr => {
            res.status(200).json(pr)
        })
        .catch(next)
})
//Post Project API
router.post('/', (req, res, next) => {
    Project.postProject(req.body)
        .then(pr => {
            res.status(201).json(pr)
        })
        .catch(next)
})
//Next Error Function 
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    })
})


module.exports = router