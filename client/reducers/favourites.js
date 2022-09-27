import {
  SHOW_FAVOURITES,
  SAVE_FAVOURITE,
  DEL_FAVOURITE,
  EDIT_FAVOURITE,
} from '../actions'

function favourites(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_FAVOURITES:
      return payload
    case SAVE_FAVOURITE:
      return [...state, payload]
    case DEL_FAVOURITE:
      return state.filter((favourite) => !favourite.id === payload.id)
    case EDIT_FAVOURITE:
      // TODO: Edit the state
      return state.map((favourite) => {
        if (favourite.id === payload) {
          favourite.done = !favourite.done
        }
        return favourite
      })
    default:
      return state
  }
}

export default favourites
