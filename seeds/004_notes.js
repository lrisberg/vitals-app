'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id:1,
          user_id: 1,
          doctor_id: 1,
          body: "He kept saying 'That's what she said' over and over."
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes));");
    });
};
