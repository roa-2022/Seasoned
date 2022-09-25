import { SELECT_DIETARY, REMOVE_DIETARY } from '../actions'

export default function dietaryReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SELECT_DIETARY:
      return [...state, payload]
    case REMOVE_DIETARY:
      return [...state].filter((dietaryType) => dietaryType !== payload)
    default:
      return state
  }
}
