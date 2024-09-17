//link the db
const knex = require('knex')
const config = require('./knexfile')
const db = knex(config['development'])


//SQL query
// SELECT * FROM recipe as r 
// LEFT JOIN steps as s
//     ON r.recipeId = s.recipe_id 
// LEFT JOIN ingredients_step as q 
//     ON s.stepID = q.step_id 
// LEFT JOIN ingredients as i 
//     ON q.step_id = i.step_id 
// WHERE s.recipe_id = 1

async function getRecipeByIdHelper(recipe_id){
   const recipe = await db('recipe as r')
   .leftJoin('steps as s', 'r.recipeId', 's.recipe_id')
   .leftJoin('ingredients_step as q', 's.stepID', 'q.step_id')
   .leftJoin('ingredients as i', 'i.ingredientID', 'q.ingredients_id' )
   .where('r.recipeId', recipe_id)

   console.log(recipe)
   return recipe
}

module.exports = {
    getRecipeByIdHelper
}