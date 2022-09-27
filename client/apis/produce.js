import request from 'superagent'

const rootUrl = '/api/v1'

export async function getProduce() {
  try {
    const res = await request.get(rootUrl + '/produce')
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function getAvailableProduct(season) {
  try {
    const res = await request.get(rootUrl + '/available/season/' + season)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function postFavouriteProduct(recipe, auth0Id) {
  try {
    const res = await request
      .post(`${rootUrl}/produce/favourites`)
      .send({ recipe: recipe, auth0_id: auth0Id })
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
