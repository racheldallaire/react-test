exports.seed = function(knex, Promise) {
  return knex('users')
    .then(function () {
      return Promise.all([
        knex('users').insert({first_name: "John", last_name: "Wayne", role: "Admin", password: "cowboy123"}),
        knex('users').insert({first_name: "Dwayne", last_name: "Johnson", role: "Regular", password: "IamTheRock"})
      ]);
    });
};