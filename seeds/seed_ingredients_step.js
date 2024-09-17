const ingredients_step = [
  {
    quantity: 500,
    step_id: 1,
    ingredients_id: 2
  },
  {
    quantity: 750,
    step_id: 2,
    ingredients_id: 3
  },{
    quantity: 23,
    ingredients_id: 4,
    step_id: 3,
  },{
    quantity: 1000,
    step_id: 4,
    ingredients_id: 1
  },{
    step_id: 5,
  },{
    step_id: 6,
  },{
    quantity: 1000,
    step_id: 7,
    ingredients_id: 2
  },{
    step_id: 8,
  },{
    quantity: 150,
    step_id: 7,
    ingredients_id: 4
  },{
    quantity: 150,
    step_id: 2,
    ingredients_id: 4
  }
]

exports.seed = function(knex) {
  return knex('ingredients_step')
    .insert(ingredients_step)
};