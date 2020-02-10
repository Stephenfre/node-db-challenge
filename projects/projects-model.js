const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    add,
    // update,
    // remove
}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({ id }).first();
}

function add(projects) {
    return db('projects')
        .insert(projects)
        .then(ids => {
            return findById(ids[0])
        });
}