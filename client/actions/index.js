import { getFruits } from '../apis/fruits'
import { getVegetables } from '../apis/vegetables'

export const SET_FRUITS = 'SET_FRUITS'

export const SET_VEGETABLES = 'SET_VEGETABLES'

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function setVegetables(vegetables) {
  return {
    type: SET_VEGETABLES,
    payload: vegetables,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}

export function fetchVegetables() {
  return (dispatch) => {
    return getVegetables().then((vegetables) => {
      dispatch(setVegetables(vegetables))
    })
  }
}
