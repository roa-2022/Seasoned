import { GET_INGREDIENT } from '../actions'

const ingredientReducer = (state = '', action) => {
  const { type, payload } = action
  switch (type) {
    case GET_INGREDIENT:
      return payload
    default:
      return state
  }
}

export default ingredientReducer
