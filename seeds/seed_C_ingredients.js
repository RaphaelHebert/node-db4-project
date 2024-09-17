const ingredients = [

  {
    ingredient_name: 'potatoes',
  },
  {
    ingredient_name: 'beef',
  },
  {
    ingredient_name: 'vegetables',
  },
  {
    ingredient_name: 'cheese',
  },
]

exports.seed = function(knex) {
  return knex('ingredients').insert(ingredients)
};
