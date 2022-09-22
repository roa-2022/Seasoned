import { combineReducers } from 'redux'

import fruits from './fruits'
import user from './loggedInUser'

export default combineReducers({
  fruits,
  user,
})
