const express = require('express')
const server = express()
const recipeRouter = require('./recipe/recipe_server')

server.use(express.json())
server.use('/api/recipe', recipeRouter)

// catchall
server.get('*', (req, res, next) => {
    res.status(404).json({
        status: 404,
        message: "page not found"
    })
})

server.use((err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
            stack: err.stack
        })
})

module.exports = server
