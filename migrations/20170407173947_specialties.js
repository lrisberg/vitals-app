exports.up = function(knex) {
  return knex.schema.createTable('specialties', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('logo').notNullable().defaultTo('https://www.steward.org/sites/default/files/stock%20doctors.png')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('specialties');
};
