
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          id:1,
          name: "General Practitioner",
          logo: "../public/images/general-prac.jpg"
        },
        {
          id:2,
          name: "Optometrist",
          logo: "../public/images/black-glasses.svg"
        },
        {
          id:3,
          name: "Dentist",
          logo: "../public/images/dentists.jpg"
        },
        {
          id:4,
          name: "Cardiologist",
          logo: "../public/images/heart.jpg"
        },
        {
          id:5,
          name: "Orthodontist",
          logo: "../public/images/orthodontist.jpeg"
        },
        {
          id:6,
          name: "Chiropractor",
          logo: "../public/images/spine.png"
        },
        {
          id:7,
          name: "Proctologist",
          logo: "../public/images/finger.png"
        },
        {
          id: 8,
          name: "Gynecologist",
          logo: "../public/images/baby.jpg"
        },
        {
          id:9,
          name: "Pathologist",
          logo: "../public/images/pathology.jpg"
        },
        {
          id:10,
          name: "Urologist",
          logo: "../public/images/pin-bladder_grande.jpg"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('specialties_id_seq', (SELECT MAX(id) FROM specialties));");
    });
};
