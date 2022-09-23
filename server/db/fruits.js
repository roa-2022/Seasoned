const connection = require('./connection')

function readFruits(db = connection) {
  return db('fruit').select()
}

module.exports = {
  readFruits,
}
