import request from 'superagent'

// const rootUrl = '/api/v1'

// TODO: create .env file to store my KEY
// Adjust config/setup -- Dotenv

export function getRecipes(userInput) {
  return request
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=eeb6d9e0&app_key=${process.env.KEY}`
    )
    .then((res) => {
      // console.log(res.body)
      const result = res.body.hits
      console.log(result)
      return result
    })
}
