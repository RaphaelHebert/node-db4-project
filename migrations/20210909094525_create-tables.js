
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
    tbl.increments('recipeId');
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
        .references('recipeId')
        .inTable('recipe')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredientID');
      tbl.string('ingredient_name', 128)
        .notNullable();
  })
  .createTable('ingredients_step', tbl => {
      tbl.increments();
      tbl.string('quantity', 6);
      tbl.integer('step_id')
        .unsigned()
        .notNullable()
        .references('stepID')
        .inTable('steps')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
      tbl.integer('ingredients_id')
        .unsigned()
        .references('ingredientID')
        .inTable('ingredients')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients_step')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe')
};
