const Helper = require('../../db-helpers')

async function getRecipeById(id){
    const recipe = await Helper.getRecipeByIdHelper(id)
    const result = {
        recipe_id : id,
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
        steps: recipe.map( step => {
            return {
                step_id: step.stepID,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                //modify and try with multiple ingredients
                ingredients: step.ingredient_name || []
            }
        })
    }
    return result
}

module.exports = {
    getRecipeById
}