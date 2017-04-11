exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          user_id: 1,
          record_id: 1,
          body: "He kept saying 'That's what she said' over and over."
        },
        {
          id: 2,
          user_id: 1,
          record_id: 2,
          body: "The dentist told me to floss more."
        },
        {
          id: 3,
          user_id: 2,
          record_id: 3,
          body: "I had a baby!"
        },
        {
          id: 4,
          user_id: 3,
          record_id: 4,
          body: "I went in to the clinic for a flu shot."
        },
        {
          id: 5,
          user_id: 3,
          record_id: 4,
          body: "Then I had some blood work done."
        },
        {
          id: 6,
          user_id: 3,
          record_id: 8,
          body: "The doctor gave me a lollypop!"
        },
        {
          id: 7,
          user_id: 2,
          record_id: 12,
          body: "I was prescribed some drugs."
        },
        {
          id: 8,
          user_id: 1,
          record_id: 11,
          body: "Blood work came back good."
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('records_id_seq', (SELECT MAX(id) FROM records));");
    });
};
