const Helper = require('../../db-helpers')

async function getRecipeById(id){
    const recipe = await Helper.getRecipeByIdHelper(id)
    // const ingredients = {}
    // recipe.forEach(elt => {
    //    if(elt === 'ingredient_name'){
    //         if(ingredients[elt.step_number]){
    //             ingredients[elt.step_number].push(elt.ingredient_name)
    //         } else {
    //             ingredients[elt.step_number] = [elt.ingredient_name]
    //         }
    //    }
    // });
    const ingredients = {}
    recipe.forEach(step => {
        if(!ingredients[step.step_number]){
            ingredients[step.step_number] = [{
                ingredient_id: step.ingredientID,
                quantity: step.quantity
            }]
        } else {
            ingredients[step.step_number].push({
                ingredient_id: step.ingredientID,
                quantity: step.quantity
            })
        }
    })
    const filteredRecipe = []
    recipe.forEach(step => {
        step.ingredients = ingredients[step.step_number]
        filteredRecipe[step.step_number - 1] = step
    })
    const result = {
        recipe_id : id,
        recipe_name: filteredRecipe[0].recipe_name,
        created_at: filteredRecipe[0].created_at,
        steps: filteredRecipe.map( step => {
            return {
                step_id: step.stepID,
                step_number: step.step_number,
                step_instructions: step.step_instructions,
                //modify and try with multiple ingredients
                ingredients: step.ingredients|| []
            }
        })
    }
    return result
}


module.exports = {
    getRecipeById
}