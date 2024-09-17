
const recipies = [
  {
    recipe_name: "Boeuf Bourguignon"
  },
  {
    recipe_name: "Mash potatoes"
  },
  {
    recipe_name: "French fries"
  },
]

exports.seed = function(knex) {
  return knex('recipe').insert(recipies)
};



