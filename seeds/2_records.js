
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {
          id: 1,
          user_id: 1,
          name: "General Practitioner",
          docname: "Michael Scott",
          picture: "http://www.chelseafootballshirts.org.uk/wp-content/uploads/2016/02/1450171356-apolo.jpg"
        },
        {
          id: 2,
          user_id: 1,
          name: "Optometrist",
          docname: "Vanessa Clayton",
          picture: "http://www.clker.com/cliparts/S/3/L/6/C/v/black-glasses.svg"
        },
        {
          id: 3,
          user_id: 1,
          name: "Dentist",
          docname: "Fred Gregory",
          picture: "https://vcaredentalclinic.files.wordpress.com/2014/10/url.jpg"
        },
        {
          id: 4,
          user_id: 1,
          name: "Cardiologist",
          docname: "Hugh Barnard",
          picture: "https://static.turbosquid.com/Preview/2014/07/10__10_47_50/Thumb.jpgb843e915-8d1c-49a7-aaf0-fb6ef4309d0aOriginal.jpg"
        },
        {
          id: 5,
          user_id: 2,
          name: "Orthodontist",
          docname: "Laurie Dash",
          picture: "http://www.clipartbest.com/cliparts/4c9/6kd/4c96kddgi.jpg"
        },
        {
          id: 6,
          user_id: 2,
          name: "Chiropractor",
          docname: "Ray Jones",
          picture: "http://www.clipartkid.com/images/28/spine-clipart-cliparts-of-spine-free-download-wmf-eps-emf-svg-xwE6Tz-clipart.png"
        },
        {
          id: 7,
          user_id: 2,
          name: "Proctologist",
          docname: "Carrie Wayne",
          picture: "http://www.clipartkid.com/images/138/cartoon-hand-pointing-with-the-index-finger-outline-in-black-vector-lVZYPU-clipart.jpg"
        },
        {
          id: 8,
          user_id: 3,
          name: "Gynecologist",
          docname: "Diane Payton",
          picture: "http://clipart-library.com/images/5TRrgeXqc.jpg"
        },
        {
          id: 9,
          user_id: 3,
          name: "Pathologist",
          picture: "http://www.refluxmd.com/wp-content/uploads/2012/12/GERD-pathology-lab-results.jpg"
        },
        {
          id: 10,
          user_id: 3,
          name: "Urologist",
          docname: "Eddie Thorp",
          picture: "http://cdn.shopify.com/s/files/1/0392/9333/products/pin-bladder_grande.jpg?v=1458084198"
        },
        {
          id: 11,
          user_id: 1,
          name: "Blood Results",
          docname: "",
          picture: "http://www.burnhamhealthcentre.co.uk/website/K82033/files/medical_test_result.jpg"
        },
        {
          id: 12,
          user_id: 2,
          name: "Prescriptions",
          docname: "",
          picture: "https://www.va.gov/HEALTHBENEFITS/access/images/img_rx_001.jpg"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('records_id_seq', (SELECT MAX(id) FROM records));");
    });
};
