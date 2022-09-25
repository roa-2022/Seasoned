import { combineReducers } from 'redux'
import loadingReducer from './loading'

import loggedInUser from './loggedInUser'
import produce from './produce'
import recipesReducer from './recipes'

export default combineReducers({
  loggedInUser,
  produce,
  recipes: recipesReducer,
  loading: loadingReducer,
})
