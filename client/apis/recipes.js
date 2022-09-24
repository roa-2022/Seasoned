import request from 'superagent'

export async function getRecipes(userInput) {
  try {
    const res = await request.get(
      `https://api.edamam.com/search?q=${userInput}&app_id=eeb6d9e0&app_key=${process.env.KEY}&from=0&to=6`
    )
    const result = res.body.hits
    return result
  } catch (err) {
    console.log('Error getting recipes from Edamam API. Error: ' + err)
  }
}
