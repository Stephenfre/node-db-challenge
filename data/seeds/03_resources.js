exports.seed = function (knex) {
    return knex('resources').insert([
        { resources_name: 'house website', resources_description: 'Moving ready', projects_id: 1 },
        { resources_name: 'house cleaner website', resources_description: 'Job Searching', projects_id: 1 },
        { resources_name: 'Glassdoor.com', resources_description: 'Job Searching', projects_id: 2 },
        { resources_name: 'Lambda Careers Instructors', resources_description: '', projects_id: 3 }
    ])
};
