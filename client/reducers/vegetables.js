import { SET_VEGETABLES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_VEGETABLES:
      return payload
    default:
      return state
  }
}

export default reducer
