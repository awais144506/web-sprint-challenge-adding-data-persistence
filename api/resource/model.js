//import DB
const db = require('../../data/dbConfig')
//Get The Resources from DB
async function getResources() {
    return await db('resources')
}
//Return the id of the new Resource
async function getNewResource(id) {
    const resource = await db('resources')
        .where('resource_id', id)
        .first()
    return resource
}
//Post a new Resource in DB
async function postResource(resource) {
    return await db('resources')
    .insert(resource)
    .then(([resource_id])=>{
        return getNewResource(resource_id)
    })
}
//Export Functions
module.exports = {
    getResources,
    postResource
}