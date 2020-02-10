exports.up = function (knex) {
    return (knex.schema
        .createTable('projects', tbl => {
            // creates id field(primary key)
            tbl.increments();
            tbl.string('projects_name', 128).notNullable()
            tbl.string('projects_description', 128)
            tbl.boolean('projects_complete').notNullable().defaultTo(false);
        }))
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('tasks_description', 128).notNullable()
            tbl.varchar('tasks_notes', 255)
            tbl.boolean('tasks_complete').notNullable().defaultTo(false)
            tbl.integer('projects_id')
                .notNullable()
                .unsigned()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resources_name', 128).notNullable()
            tbl.varchar('resources_description', 255)
            tbl.integer('projects_id')
                .notNullable()
                .unsigned()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return (knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
    )
};
