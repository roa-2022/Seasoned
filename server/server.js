const express = require('express')
const path = require('path')

const fruitRecipes = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/recipes', fruitRecipes)

module.exports = server
