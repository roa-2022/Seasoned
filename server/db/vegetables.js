const connection = require('./connection')

function readVegetables(db = connection) {
  return db('vegetables').select()
}

module.exports = {
  readVegetables,
}
