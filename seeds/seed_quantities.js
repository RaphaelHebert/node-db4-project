const quantities = [
  {
    weight: 23,
    step_id: 1
  },
  {
    weight: 50,
    step_id: 2
  },
  {
    weight: 150,
    step_id: 3
  },
  {
    weight: 230,
    step_id: 4
  },
  {
    weight: 2000,
    step_id: 5
  },
  {
    weight: 2,
    step_id: 6
  },
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantities').truncate()
    .then(() => {
      return knex('quantities').insert(quantities)
    })
};