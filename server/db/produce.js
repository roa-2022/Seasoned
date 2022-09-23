const connection = require('./connection')

function readProduce(db = connection) {
  return db('produce').select()
}

module.exports = {
  readProduce,
}
