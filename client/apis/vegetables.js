import request from 'superagent'

const rootUrl = '/api/v1'

export async function getVegetables() {
  try {
    const res = await request.get(rootUrl + '/vegetables')
    return res.body
  } catch (err) {
    console.log(err)
  }
}
