import { combineReducers } from 'redux'
import dietaryReducer from './dietary'
import ingredientReducer from './ingredient'
import loadingReducer from './loading'

import loggedInUser from './loggedInUser'
import produce from './produce'
import recipesReducer from './recipes'
import seasonalProductReducer from './seasonalProduct'

export default combineReducers({
  loggedInUser,
  produce,
  recipes: recipesReducer,
  loading: loadingReducer,
  dietary: dietaryReducer,
  seasonalProduct: seasonalProductReducer,
  ingredient: ingredientReducer,
})
