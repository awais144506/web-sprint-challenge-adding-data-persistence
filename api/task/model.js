//import DB
const db = require('../../data/dbConfig')
//Get Tasks Functions
async function getTasks() {
    /*
select 
t.task_id,t.task_description,t.task_notes,t.task_completed,p.project_name,p.project_description
from tasks as t
join projects as p
on t.project_id=p.project_id
    */
    const rows = await db('tasks as t')
        .select('t.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description')
            .join('projects as p','t.project_id','p.project_id')
    const result = rows.map(row => ({
        ...row,
        task_completed: Boolean(row.task_completed)
    }))
    return result
}
//Return the new Task 
async function newTask(id) {
    const task = await db('tasks').where('task_id',id).first()
    const finalTask = {...task,task_completed:Boolean(task.task_completed)}
    return finalTask
}
//Post Task
async function postNewTask(task) {
    return await db('tasks')
    .insert(task)
    .then(([task_id])=>{
        return newTask(task_id)
    })
}

module.exports = {
    getTasks,
    postNewTask
}