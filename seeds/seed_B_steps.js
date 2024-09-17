const steps = [
  {
    step_instructions: "cut the beef",
    step_number: 1,
    recipe_id: 1
  },
  {
    step_instructions: "add the veg and prepare some cheese",
    step_number: 2,
    recipe_id: 1
  },
  {
    step_instructions: "cook in the oven at 210C during 2 hours",
    step_number: 3,
    recipe_id: 1
  },
  {
    step_instructions: "Peel potatoes",
    step_number: 1,
    recipe_id: 2
  },
  {
    step_instructions: "put the potatoes in the water",
    step_number: 2,
    recipe_id: 2
  },
  {
    step_instructions: "cook the potatoes til ready",
    step_number: 3,
    recipe_id: 2
  },
  {
    step_instructions: "mash the potatoes",
    step_number: 4,
    recipe_id: 2
  },
  {
    step_instructions: "Peel potatoes",
    step_number: 1,
    recipe_id: 3
  },
  {
    step_instructions: "cut the potatoes",
    step_number: 2,
    recipe_id: 3
  },
  {
    step_instructions: "cook in the oven at max temperature during 30 minutes and add some cheese",
    step_number: 3,
    recipe_id: 3
  }
]

exports.seed = function(knex) {
  return knex('steps').insert(steps)
};
