//Import Files 
const db = require('../../data/dbConfig')

async function getProjects() {
    const rows = await db('projects')
    const result = rows.map(pr => ({
        ...pr,
        project_completed: Boolean(pr.project_completed)
    }))
    return result
}
async function checkProjectID(id) {
    const project = await db('projects').where('project_id', id).first()
    const updated = { ...project, project_completed: Boolean(project.project_completed) }
    return updated
}
async function postProject(project) {

    return await db('projects')
        .insert(project)
        .then(([project_id]) => {
            return checkProjectID(project_id)
        })
}




module.exports = {
    getProjects,
    postProject
}
