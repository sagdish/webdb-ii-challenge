
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments('id');
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.string('VIN', 128).unique().notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('title', 64);
    tbl.string('transmission', 64);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
