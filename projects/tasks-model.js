const db = require('../data/db-config.js')

module.exports = {
    find,
    // findTask,
    findById,
    add,
    // update,
    // remove
}
function find() {
    return db('tasks')

}

// function findTask() {
//     return db('task as t')
//         .join('projects as p', 't.projects_id', 'p.id')
//         .select('p.id', 'p.projects_name', 'p.projects_description', 't.tasks_notes', 't.tasks_description')
// }

function findById(id) {
    return db('tasks').where({ id }).first();
}

function add(tasks) {
    return db('tasks')
        .insert(tasks)
        .then(ids => {
            return findById(ids[0])
        });
}