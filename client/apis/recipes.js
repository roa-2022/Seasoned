import request from 'superagent'

export async function getRecipes(userInput) {
  try {
    const res = await request.get(
      `https://api.edamam.com/search?q=${userInput}&app_id=${process.env.APP_ID}&app_key=${process.env.EDAMAM_API_KEY}&from=0&to=6`
    )
    const result = res.body.hits
    return result
  } catch (err) {
    console.log('Error getting recipes from Edamam API. Error: ' + err)
  }
}
