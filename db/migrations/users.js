exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('users', function(table){
      table.increments('id').primary().unsigned();
      table.string('first_name').notNullable().unique();
      table.string('last_name').notNullable();
      table.string('role').notNullable();
      table.string('password').notNullable();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('users')
   ]);
};
