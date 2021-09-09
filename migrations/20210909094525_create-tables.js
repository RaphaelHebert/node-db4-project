
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
    tbl.increments();
    tbl.string("recipe_name", 128).notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  })
  .createTable('steps', tbl => {
      tbl.increments('stepID');
      tbl.integer('step_number');
      tbl.text('step_instructions')
        .notNullable();
      //foreign key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe');
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
        .notNullable();
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('stepID')
        .inTable('steps');
  })
  .createTable('quantities', tbl => {
      tbl.increments();
      tbl.string('weight', 6);
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('stepID')
        .inTable('steps');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe')
};
