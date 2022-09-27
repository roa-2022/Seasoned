import { combineReducers } from 'redux'
import dietaryReducer from './dietary'
import loadingReducer from './loading'

import loggedInUser from './loggedInUser'
import produce from './produce'
import recipesReducer from './recipes'
import seasonalProductReducer from './seasonalProduct'
import favourites from './favourites'

export default combineReducers({
  loggedInUser,
  produce,
  recipes: recipesReducer,
  loading: loadingReducer,
  dietary: dietaryReducer,
  seasonalProduct: seasonalProductReducer,
  favourites,
})
