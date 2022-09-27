const connection = require('./connection')

function readFavourites(db = connection) {
  return db('favourites').select()
}

function readUserFavourites(auth0_id, db = connection) {
  return db('favourites').select().where('auth0_id', auth0_id)
}

function readOneFavourite(id, db = connection) {
  return db('favourites').select().where('id', id).first()
}

function createFavourite(favouriteObj, db = connection) {
  return db('favourites').insert({
    auth0_id: favouriteObj.auth0_id,
    label: favouriteObj.label,
    url: favouriteObj.url,
  })
}

function updateFavourite(updatedFavourite, id, db = connection) {
  return db('favourites')
    .update({
      id: updatedFavourite.id,
      auth0_id: updatedFavourite.auth0_id,
      recipe: updatedFavourite.recipe,
      rating: updatedFavourite.rating,
      done: updatedFavourite.done,
    })
    .where('id', id)
}

function deleteFavourite(id, db = connection) {
  return db('favourites').del().where('id', id)
}

module.exports = {
  readFavourites,
  readUserFavourites,
  readOneFavourite,
  createFavourite,
  updateFavourite,
  deleteFavourite,
}
