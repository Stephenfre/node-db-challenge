exports.seed = function (knex) {
    return knex('tasks').insert([
        { tasks_description: 'Clean house', tasks_notes: 'make sure to vaccum and shampoo the carpet.', tasks_complete: false, projects_id: 1 },
        { tasks_description: 'Pack Everything', tasks_notes: 'double check the house before you leave.', tasks_complete: false, projects_id: 1 },
        { tasks_description: 'Create Resume', tasks_notes: '', tasks_complete: false, projects_id: 2 },
        { tasks_description: 'Prepare for interviews', tasks_notes: 'watch youtube videos for tips', tasks_complete: false, projects_id: 2 },
        { tasks_description: 'Finsih Lambda Careers Projects', tasks_notes: '', tasks_complete: false, projects_id: 3 }
    ]);
};