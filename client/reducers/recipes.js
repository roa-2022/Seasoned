import { SEARCH_RECIPES } from '../actions'

const initialState = []

const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SEARCH_RECIPES:
      return payload
    default:
      return state
  }
}

export default recipesReducer
