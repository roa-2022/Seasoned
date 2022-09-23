import { SET_PRODUCE } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PRODUCE:
      return payload
    default:
      return state
  }
}

export default reducer
