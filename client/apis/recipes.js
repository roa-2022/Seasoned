import request from 'superagent'

export async function getRecipes(userInput) {
  try {
    console.log(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=eeb6d9e0&app_key=${process.env.KEY}`
    )
    const res = await request.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=eeb6d9e0&app_key=${process.env.KEY}`
    )
    const result = res.body.hits
    return result
  } catch (err) {
    console.log('Error getting recipes from Edamam API. Error: ' + err)
  }
}
