import { LOADING, DISPLAY_RECIPES } from '../actions'

export default function loadingReducer(state = false, action) {
  const { type } = action

  switch (type) {
    case LOADING:
      return true
    case DISPLAY_RECIPES:
      return false
    default:
      return state
  }
}
