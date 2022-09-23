import { combineReducers } from 'redux'

import loggedInUser from './loggedInUser'
import produce from './produce'

export default combineReducers({
  loggedInUser,
  produce,
})
