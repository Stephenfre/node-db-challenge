exports.seed = function (knex) {
    return knex('projects').insert([
        { projects_name: 'Ready to move', projects_description: 'Moving ready', projects_complete: false },
        { projects_name: 'New Job Search', projects_description: 'Job Searching', projects_complete: false },
        { projects_name: 'Lambda Careers', projects_description: '', projects_complete: false }
    ])
};
