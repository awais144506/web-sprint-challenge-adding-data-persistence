//Import Files
const express = require('express')
//Invoke Router
const router = express.Router()





//Next Function 
router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message
    })
})

module.exports = router