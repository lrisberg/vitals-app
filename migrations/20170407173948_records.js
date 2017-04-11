exports.up = function(knex) {
  return knex.schema.createTable('records', (table) => {
    table.increments();
    table.string('name').notNullable();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table.string('docname');
    table.string('picture').defaultTo('');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('records');
};
