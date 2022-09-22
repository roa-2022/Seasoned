import { getRecipes } from '../apis/recipes'

export const DISPLAY_RECIPES = 'DISPLAY_RECIPES'

export function displayRecipes(recipes) {
  return {
    type: DISPLAY_RECIPES,
    payload: recipes,
  }
}

export function fetchRecipes(userInput) {
  return async (dispatch) => {
    try {
      const recipes = await getRecipes(userInput)
      dispatch(displayRecipes(recipes))
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }
}
