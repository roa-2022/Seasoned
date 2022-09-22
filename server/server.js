const express = require('express')
const path = require('path')

const produceRoutes = require('./routes/produce')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/produce', produceRoutes)

module.exports = server
