const ingredients_step = [
  {
    quantity: 23,
    step_id: 1,
    ingredients_id:1
  },
  {
    quantity: 150,
    step_id: 1,
    ingredients_id: 2
  },{
    quantity: 23,
    step_id: 1,
    ingredients_id: 3
  },{
    quantity: 23,
    step_id: 1,
    ingredients_id: 4
  },{
    quantity: 23,
    step_id: 1,
    ingredients_id: 2
  },{
    quantity: 23,
    step_id: 1,
    ingredients_id: 2
  },{
    quantity: 23,
    step_id: 1,
    ingredients_id: 3
  }
]

exports.seed = function(knex) {
  return knex('ingredients_step')
    .insert(ingredients_step)
};