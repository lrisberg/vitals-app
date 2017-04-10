
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          id:1,
          name: "General Practitioner",
          logo: "http://www.chelseafootballshirts.org.uk/wp-content/uploads/2016/02/1450171356-apolo.jpg"
        },
        {
          id:2,
          name: "Optometrist",
          logo: "http://www.clker.com/cliparts/S/3/L/6/C/v/black-glasses.svg"
        },
        {
          id:3,
          name: "Dentist",
          logo: "https://vcaredentalclinic.files.wordpress.com/2014/10/url.jpg"
        },
        {
          id:4,
          name: "Cardiologist",
          logo: "https://static.turbosquid.com/Preview/2014/07/10__10_47_50/Thumb.jpgb843e915-8d1c-49a7-aaf0-fb6ef4309d0aOriginal.jpg"
        },
        {
          id:5,
          name: "Orthodontist",
          logo: "http://www.clipartbest.com/cliparts/4c9/6kd/4c96kddgi.jpg"
        },
        {
          id:6,
          name: "Chiropractor",
          logo: "http://www.clipartkid.com/images/28/spine-clipart-cliparts-of-spine-free-download-wmf-eps-emf-svg-xwE6Tz-clipart.png"
        },
        {
          id:7,
          name: "Proctologist",
          logo: "http://www.clipartkid.com/images/138/cartoon-hand-pointing-with-the-index-finger-outline-in-black-vector-lVZYPU-clipart.jpg"
        },
        {
          id: 8,
          name: "Gynecologist",
          logo: "http://clipart-library.com/images/5TRrgeXqc.jpg"
        },
        {
          id:9,
          name: "Pathologist",
          logo: "http://www.refluxmd.com/wp-content/uploads/2012/12/GERD-pathology-lab-results.jpg"
        },
        {
          id:10,
          name: "Urologist",
          logo: "http://cdn.shopify.com/s/files/1/0392/9333/products/pin-bladder_grande.jpg?v=1458084198"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('specialties_id_seq', (SELECT MAX(id) FROM specialties));");
    });
};
