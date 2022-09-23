import request from 'superagent'

// const rootUrl = '/api/v1'

// TODO: create .env file to store my KEY
// Adjust config/setup -- Dotenv

export async function getRecipes(userInput) {
  try {
    const res = await request.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=eeb6d9e0&app_key=${process.env.KEY}`
    )
    const result = res.body.hits
    return result
  } catch (err) {
    console.log('Error getting recipes from Edamam API. Error: ' + err)
  }
}
