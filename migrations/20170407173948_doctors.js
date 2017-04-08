exports.up = function(knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments();
    table.string('first_name');
    table.string('last_name').notNullable();
    table.string('email').unique();
    table.string('phone');
    table.string('address');
    table.integer('specialty_id').references('id').inTable('specialties').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('doctors');
};
