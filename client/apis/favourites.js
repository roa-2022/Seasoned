import request from 'superagent'

const rootUrl = '/api/v1'

export async function postFavourite(recipe, auth0Id) {
  console.log(auth0Id)
  try {
    const res = await request
      .post(`${rootUrl}/favourites`)
      .send(recipe, auth0Id)
    console.log(res.body)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function getUserFavourites(auth0_id) {
  try {
    const res = await request.get(`${rootUrl}/favourites/user/${auth0_id}`)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function patchFavourite(id, recipe) {
  try {
    const res = await request.patch(`${rootUrl}/favourites/${id}`).send(recipe)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function removeFavourite(id) {
  try {
    const res = await request.delete(`${rootUrl}/favourites/${id}`)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
