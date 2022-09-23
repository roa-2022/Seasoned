import { combineReducers } from 'redux'

import fruits from './fruits'
import loggedInUser from './loggedInUser'

export default combineReducers({
  fruits,
  loggedInUser,
})
