import request from 'superagent'

const rootUrl = '/api/v1'

export async function getFruits() {
  try {
    const res = await request.get(rootUrl + '/fruits')
    return res.body.fruits
  } catch (err) {
    console.log(err)
  }
}
