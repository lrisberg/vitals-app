
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
          phone: "720-555-4444",
          address: "28 Skidoo Blvd",
          specialty_id: 1
        },
        {
          id:4,
          first_name: "Spud",
          last_name: "McKenzie",
          email: "spud@AOL.com",
          phone: "720-555-5555",
          address: "30 Skidoo Blvd",
          specialty_id: 6
        },
        {
          id:5,
          first_name: "Clara",
          last_name: "Higgins",
          email: "drhiggins@AOL.com",
          phone: "720-555-6666",
          address: "50 Skidoo Blvd",
          specialty_id: 7
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('doctors_id_seq', (SELECT MAX(id) FROM doctors));");
    });
};
