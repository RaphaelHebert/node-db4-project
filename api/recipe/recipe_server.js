const Recipe = require('./recipe_model')

const express = require('express')
const { response } = require('express')

const router = express.Router()


router.get('/:id', async (req, res, next) => {
   try{
      const result = await Recipe.getRecipeById(req.params.id)
      res.status(200).json(result)
   } catch (err) {
      next(err)
   }
})

module.exports = router

