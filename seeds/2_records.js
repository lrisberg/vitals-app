
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {
          id: 1,
          user_id: 1,
          name: "Test Results",
          docname: "",
          picture: "results.png"
        },
        {
          id: 2,
          user_id: 2,
          name: "Prescriptions",
          docname: "",
          picture: "prescription.png"
        },
        {
          id: 3,
          user_id: 1,
          name: "General Practitioner",
          docname: "Michael Scott",
          picture: "doctor.png"
        },
        {
          id: 4,
          user_id: 1,
          name: "Dentist",
          docname: "Fred Gregory",
          picture: "dentist.png"
        },
        {
          id: 5,
          user_id: 1,
          name: "Optometrist",
          docname: "Vanessa Clayton",
          picture: "optometrist.png"
        },
        {
          id: 6,
          user_id: 1,
          name: "Cardiologist",
          docname: "Hugh Barnard",
          picture: "cardiologist.png"
        },
        {
          id: 7,
          user_id: 2,
          name: "Orthodontist",
          docname: "Laurie Dash",
          picture: "orthodontist.png"
        },
        {
          id: 8,
          user_id: 2,
          name: "Pediatrician",
          docname: "Ray Jones",
          picture: "pediatrician.png"
        },
        {
          id: 9,
          user_id: 3,
          name: "Gynecologist",
          docname: "Diane Payton",
          picture: "gynecologist.png"
        },
        {
          id: 10,
          user_id: 3,
          name: "Pathologist",
          picture: "pathologist.png"
        },
        {
          id: 11,
          user_id: 3,
          name: "Urologist",
          docname: "Eddie Thorp",
          picture: "kidney.png"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('records_id_seq', (SELECT MAX(id) FROM records));");
    });
};
