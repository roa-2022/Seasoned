import { DISPLAY_PRODUCT } from '../actions'

export default function seasonalProductReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case DISPLAY_PRODUCT:
      return payload
    default:
      return state
  }
}
