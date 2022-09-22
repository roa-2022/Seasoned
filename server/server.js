const express = require('express')
const path = require('path')

const recipesRoutes = require('./routes/recipes')
const userRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/recipes', recipesRoutes)
server.use('/api/v1/users', userRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
