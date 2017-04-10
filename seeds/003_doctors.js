
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
        },
        {
          id:2,
          first_name: "David",
          last_name: "Gnarl",
          email: "DrGnarl@Gmail.com",
          phone: "303-970-2245",
          address: "718 Bluefield Lane",
          specialty_id: 4
        },
        {
          id:3,
          first_name: "Vanessa",
          last_name: "Carlton",
          email: "DrCarlton@AOL.com",
          phone: "720-555-8932",
          address: "27 Skidoo Blvd",
          specialty_id: 1
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));");
    });
};
