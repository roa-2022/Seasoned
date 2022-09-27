const path = require('path')
const express = require('express')

const userRoutes = require('./routes/users')
const produceRoutes = require('./routes/produce')
const produceAvailableRoutes = require('./routes/produce_available_months')
const favouriteRoutes = require('./routes/favourites')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)
server.use('/api/v1/produce', produceRoutes)
server.use('/api/v1/available', produceAvailableRoutes)
server.use('/api/v1/favourites', favouriteRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
