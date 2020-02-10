const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    add,
    // update,
    // remove
}
function find() {
    return db('resources');
}

function findById(id) {
    return db('resources').where({ id }).first();
}


// function add(resources) {
//     return db('resources')
//         .insert(resources)

// }

function add(resources) {
    return db('resources')
        .insert(resources)
        .then(ids => {
            return findById(ids[0])
        });
}