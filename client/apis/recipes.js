import request from 'superagent'

// const rootUrl = '/api/v1'

// TODO: create .env file to store my KEY
// Adjust config/setup -- Dotenv

export function getRecipes(userInput) {
  return request
    .get(
      // `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&KEY`

      `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=eeb6d9e0&app_key=9bbd15d307d13bf463f6a7326338bced&nutrients%5BCA%5D=50%2B`
    )
    .then((res) => {
      // console.log(res.body)
      const result = res.body.hits
      console.log(result)
      return result
    })
}
