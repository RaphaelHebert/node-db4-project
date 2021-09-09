
const recipies = [
  {
    recipe_name: "Boeuf Bourgignon"
  },
  {
    recipe_name: "Mash potatoes"
  },
  {
    recipe_name: "French fries"
  },
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(() => {
      return knex('recipe').insert(recipies)
    })
};



