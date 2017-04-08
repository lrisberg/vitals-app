
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          id:1,
          name: "General Practitioner"
        },
        {
          id:2,
          name: "Optometrist"
        },
        {
          id:3,
          name: "Dentist"
        },
        {
          id:4,
          name: "Cardiologist"
        },
        {
          id:5,
          name: "Orthodontist"
        },
        {
          id:6,
          name: "Chiropractor"
        },
        {
          id:7,
          name: "Proctologist"
        },
        {
          id: 8,
          name: "Gynecologist"
        },
        {
          id:9,
          name: "Pathologist"
        },
        {
          id:10,
          name: "Urologist"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('specialties_id_seq', (SELECT MAX(id) FROM specialties));");
    });
};
