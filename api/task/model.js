//import DB
const db = require('../../data/dbConfig')
//Get Tasks Functions
async function getTasks() {
    return await db('tasks')
}
//Check the Task ID

//Post Task


module.exports = {
    getTasks
}