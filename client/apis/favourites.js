import request from 'superagent'

const rootUrl = '/api/v1'

export async function postFavourite(auth0Id, recipe) {
  try {
    const res = await request
      .post(`${rootUrl}/favourites`)
      .send(auth0Id, recipe)
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
