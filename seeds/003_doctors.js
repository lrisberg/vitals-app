
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {
          id:1,
          first_name: "Michael",
          last_name: "Scott",
          email: "IAmMichaelScott@Gmail.com",
          phone: "303-867-5309",
          address: "123 Evergreen Terrace",
          specialty_id: 2
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));");
    });
};
