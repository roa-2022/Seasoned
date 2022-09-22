const connection = require('./connection')

function readFruits(db = connection) {
  return db('fruits').select()
}

module.exports = {
  readFruits,
}
