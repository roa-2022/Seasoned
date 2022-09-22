import { getRecipes } from '../apis/recipes'

export const SEARCH_RECIPES = 'SEARCH_RECIPES'

export function searchRecipes(userInput) {
  return {
    type: SEARCH_RECIPES,
    payload: userInput,
  }
}

export function fetchRecipes() {
  return async (dispatch) => {
    try {
      const recipes = await getRecipes()
      dispatch(searchRecipes(recipes))
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }
}
