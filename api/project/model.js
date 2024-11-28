//Import Files 
const db = require('../../data/dbConfig')
//Get Projects from DB
async function getProjects() {
    const rows = await db('projects')
    const result = rows.map(pr => ({
        ...pr,
        project_completed: Boolean(pr.project_completed)
    }))
    return result
}
//Get ID of New Project
async function checkProjectID(id) {
    const project = await db('projects').where('project_id', id).first()
    const updated = { ...project, project_completed: Boolean(project.project_completed) }
    return updated
}
//Post a new Project 
async function postProject(project) {

    return await db('projects')
        .insert(project)
        .then(([project_id]) => {
            return checkProjectID(project_id)
        })
}
//Export Functions
module.exports = {
    getProjects,
    postProject
}
