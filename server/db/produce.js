const connection = require('./connection')

function readProduce(db = connection) {
  return db('produce').select()
}

function readOneProduce(id, db = connection) {
  return db('produce').select().where('id', id).first()
}

function createProduce(newProduce, db = connection) {
  return db('produce').insert(newProduce)
}

function updateProduce(updatedProduce, id, db = connection) {
  return db('produce')
    .update({
      id: updatedProduce.id,
      name: updatedProduce.name,
      display_name: updatedProduce.display_name,
      type: updatedProduce.type,
      image: updatedProduce.image,
    })
    .where('id', id)
}

function deleteProduce(id, db = connection) {
  return db('produce').del().where('id', id)
}

module.exports = {
  readProduce,
  readOneProduce,
  createProduce,
  updateProduce,
  deleteProduce,
}
