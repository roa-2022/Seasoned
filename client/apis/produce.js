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
    console.log(res.body)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}

export async function postFavouriteProduct(auth0Id) {
  try {
    const res = await (
      await request.post(`${rootUrl}/produce/${id}/favourites`)
    ).send(auth0Id)
    console.log(res.body)
    return res.body
  } catch (err) {
    console.log('Err message: ' + err)
  }
}
