import request from 'superagent'

// const rootUrl = '/api/v1'

// TODO: create .env file to store my KEY
// Adjust config/setup -- Dotenv

export function getRecipes() {
  return request
    .get(
      'https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=eeb6d9e0&app_key=9bbd15d307d13bf463f6a7326338bced&nutrients%5BCA%5D=50%2B'
    )
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
