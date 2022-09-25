import { getRecipes } from '../apis/recipes'
import { getProduce } from '../apis/produce'

export const DISPLAY_RECIPES = 'DISPLAY_RECIPES'
export const SELECT_DIETARY = 'SELECT_DIETARY'
export const REMOVE_DIETARY = 'REMOVE_DIETARY'

export const LOADING = 'LOADING'
export const STOP_LOADING = 'STOP_LOADING'

export function setLoading() {
  return {
    type: LOADING,
  }
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  }
}

export function dietarySelect(dietaryType) {
  return {
    type: SELECT_DIETARY,
    payload: dietaryType,
  }
}

export function dietaryRemove(dietaryType) {
  return {
    type: REMOVE_DIETARY,
    payload: dietaryType,
  }
}

export function displayRecipes(recipes) {
  return {
    type: DISPLAY_RECIPES,
    payload: recipes,
  }
}

export function fetchRecipes(userInput) {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      const recipes = await getRecipes(userInput)
      setTimeout(() => {
        dispatch(stopLoading())
        dispatch(displayRecipes(recipes))
      }, 1000)
    } catch (err) {
      console.log('fetchRecipes - ' + err)
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
      console.log('fetchProduce - ' + err)
    }
  }
}
