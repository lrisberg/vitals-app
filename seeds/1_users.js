'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          first_name: "Bobby",
          last_name: "McBobbleston",
          email: "testemail@gmail.com",
          hashed_password: "$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC",
          age: 30,
          gender: 'male',
          height: '72',
          weight: '180.2'
        },
        {
          id: 2,
          first_name: "Tom",
          last_name: "Servo",
          email: "MST3K@gmail.com",
          hashed_password: "$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC",
          age: 32,
          gender: 'Other',
          height: '20',
          weight: '40'
        },
        {
          id: 3,
          first_name: "Mike",
          last_name: "Nolan",
          email: "outerspace@yahoo.com",
          hashed_password: "$2a$12$wT.5JTjuusI2f1XxeFVp1eXIWTmVwcZNLB3YI/Wko7Y96oveAAt6K",
          age: 40,
          gender: 'Male',
          height: '68',
          weight: '200'
        },
        {
          id: 4,
          first_name: "Calvin",
          last_name: "Lized",
          email: "calvin@galvanize.com",
          hashed_password: "$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC",
          age: 40,
          gender: 'Male',
          height: '70',
          weight: '200'
        }

      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
