const ingredients = [
  {
    ingredient_name: 'potatoes',
    step_id: 4,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 5,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 5,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 6,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 7,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 8,
  },
  {
    ingredient_name: 'potatoes',
    step_id: 9,
  },
  {
    ingredient_name: 'beef',
    step_id: 1,
  },
  {
    ingredient_name: 'vegetables',
    step_id: 2,
  },
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
  .then(() => {
    return knex('ingredients').insert(ingredients)
  })
};
