const express = require('express')
const path = require('path')

const fruitsRoutes = require('./routes/fruits')
const vegetablesRoutes = require('./routes/vegetables')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitsRoutes)
server.use('/api/v1/vegetables', vegetablesRoutes)

module.exports = server
