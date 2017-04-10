'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          user_id: 1,
          doctor_id: 1,
          body: "He kept saying 'That's what she said' over and over."
        },
        {
          id: 2,
          user_id: 1,
          doctor_id: 2,
          body: "The dentist told me to floss more."
        },
        {
          id: 3,
          user_id: 2,
          doctor_id: 3,
          body: "I had a baby!"
        },
        {
          id: 4,
          user_id: 3,
          doctor_id: 4,
          body: "I went in to the clinic for a flu shot."
        },
        {
          id: 5,
          user_id: 3,
          doctor_id: 4,
          body: "Then I had some blood work done."
        },
        {
          id: 6,
          user_id: 3,
          doctor_id: 5,
          body: "The doctor gave me a lollypop!"
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes));");
    });
};
