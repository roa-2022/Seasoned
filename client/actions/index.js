import { getRecipes } from '../apis/recipes'
import { getProduce } from '../apis/produce'

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
      const recipes = await getRecipes(userInput, 10)
      dispatch(displayRecipes(recipes))
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }
}

export const SET_PRODUCE = 'SET_PRODUCE'

export function setProduce(produce) {
  return {
    type: SET_PRODUCE,
    payload: produce,
  }
}

export function fetchProduce() {
  return async (dispatch) => {
    try {
      const produce = await getProduce()
      dispatch(setProduce(produce))
    } catch (err) {
      console.log('Err message: ' + err)
    }
  }
}
