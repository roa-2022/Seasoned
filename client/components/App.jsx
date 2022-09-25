import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Recipe from './Recipe'
import SearchRecipe from './SearchRecipe'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/theme'

// import Nav from './Nav'
import TopNav from './TopNav'
import Register from './Register'
import Footer from './Footer'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api'

function App() {
  useCacheUser()
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
    <ThemeProvider theme={theme}>
      <TopNav />
      <Routes>
        <Route path="/" element={<SearchRecipe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipes/:id" element={<Recipe />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
