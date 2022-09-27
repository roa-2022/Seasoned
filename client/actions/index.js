import { getRecipes } from '../apis/recipes'
import { getProduce, getAvailableProduct } from '../apis/produce'

export const DISPLAY_RECIPES = 'DISPLAY_RECIPES'
export const SELECT_DIETARY = 'SELECT_DIETARY'
export const REMOVE_DIETARY = 'REMOVE_DIETARY'
export const DISPLAY_PRODUCT = 'DISPLAY_PRODUCT'

export const LOADING = 'LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const GET_INGREDIENT = 'GET_INGREDIENT'

export function displayAvailableProducts(product) {
  return {
    type: DISPLAY_PRODUCT,
    payload: product,
  }
}

export function fetchSeason(season) {
  return async (dispatch) => {
    try {
      const product = await getAvailableProduct(season)
      dispatch(displayAvailableProducts(product))
    } catch (err) {
      console.log('fetchSeason - ' + err)
    }
  }
}

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

export function getIngredient(ingredient) {
  return {
    type: GET_INGREDIENT,
    payload: ingredient,
  }
}

export function fetchRecipes(ingredient) {
  return async (dispatch) => {
    try {
      dispatch(setLoading())
      const recipes = await getRecipes(ingredient)
      setTimeout(() => {
        dispatch(stopLoading())
        dispatch(getIngredient(ingredient))
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
