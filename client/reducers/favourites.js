import {
  SHOW_FAVOURITES,
  SAVE_FAVOURITE,
  DEL_FAVOURITE,
  EDIT_FAVOURITES,
} from '../actions'

function favourites(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_FAVOURITES:
      // return payload
      return payload.map((favourite) => {
        return {
          id: favourite.id,
          auth0_id: favourite.auth0_id,
          rating: favourite.rating,
          done: favourite.done,
          recipe: JSON.parse(favourite.recipe),
        }
      })

    case SAVE_FAVOURITE:
      return [...state, payload]
    case DEL_FAVOURITE:
      return state.filter((favourite) => !favourite.id === payload.id)
    case EDIT_FAVOURITES:
      // TODO: Edit the state
      return state
    default:
      return state
  }
}

export default favourites
