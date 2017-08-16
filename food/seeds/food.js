
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'mike', password: "test",favoriteFood: "pasta", leastFavoriteFood:"not-pasta"},
        {id: 2, username: 'test', password: "blabal", favoriteFood: "hamburgers", leastFavoriteFood: "round-thigns"},
      ]);
    });
};
