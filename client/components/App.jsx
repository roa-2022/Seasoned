import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Nav from './Nav'
// import Fruits from './Fruits'
import Register from './Register'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api'

// import { fetchFruits } from '../actions'

function App() {
  useCacheUser()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearLoggedInUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>This is the home page.</h1>} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
