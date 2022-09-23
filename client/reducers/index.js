import { combineReducers } from 'redux'

import loggedInUser from './loggedInUser'
import produce from './produce'
import recipesReducer from './recipes'

export default combineReducers({
  loggedInUser,
  produce,
  recipes: recipesReducer
})
