'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id:1,
          first_name: "Lauren",
          last_name: "Risberg",
          email: "testemail@gmail.com",
          hashed_password: "$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC",
          age: 25,
          gender: 'female',
          height: 65,
          weight: 110.2,
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
