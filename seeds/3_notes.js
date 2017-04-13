exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          record_id: 1,
          body: "He kept saying 'That's what she said' over and over."
        },
        {
          id: 2,
          record_id: 2,
          body: "The dentist told me to floss more."
        },
        {
          id: 3,
          record_id: 3,
          body: "I had a baby!"
        },
        {
          id: 4,
          record_id: 4,
          body: "I went in to the clinic for a flu shot."
        },
        {
          id: 5,
          record_id: 4,
          body: "Then I had some blood work done."
        },
        {
          id: 6,
          record_id: 8,
          body: "The doctor gave me a lollypop!"
        },
        {
          id: 7,
          record_id: 11,
          body: "I was prescribed some drugs."
        },
        {
          id: 8,
          record_id: 11,
          body: "Blood work came back good."
        },
        {
          id: 9,
          record_id: 12,
          body: "I'm supposed to pick up my new prescription at the pharmacy at King Sooper's."
        },
        {
          id: 10,
          record_id: 13,
          body: "My blood work came back better than last time! I guess all this exercise and eating healthy is really paying off."
        },
        {
          id: 11,
          record_id: 14,
          body: "I'm due for my physical next November."
        },
        {
          id: 12,
          record_id: 15,
          body: "My eyes have been bothering me lately. Too much staring at the computer screen! I need to check in with my optometrist by next month."
        },
        {
          id: 13,
          record_id: 16,
          body: "The dentist told me to floss more..."
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('notes_id_seq', (SELECT MAX(id) FROM notes));");
    });
};
