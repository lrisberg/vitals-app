exports.up = function(knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('record_id')
      .references('id')
      .inTable('records')
      .notNullable()
      .onDelete('CASCADE');
    table.text('body').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};
