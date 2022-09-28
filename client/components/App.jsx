import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Recipe from './Recipe'
import SearchRecipe from './SearchRecipe'

import Nav from './Nav'
import Register from './Register'
import Favourites from './Favourites'
import Footer from './Footer'
import Header from './Header'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../styles/theme'
import { fetchSeason } from '../actions'

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
        .then((token) => {
          getUser(token)
        })
        .then((userInDb) => {
          userInDb
            ? dispatch(updateLoggedInUser(userInDb))
            : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  // ---------- Show products of current season based on current month when loading ---------- //

  useEffect(() => {
    dispatch(fetchSeason(currentSeason()))
  }, [])

  const currentSeason = () => {
    const currentMonth = new Date().getMonth() + 1
    switch (currentMonth) {
      case 9 || 10 || 11:
        return 'spring'
      case 12 || 1 || 2:
        return 'summer'
      case 3 || 4 || 5:
        return 'autumn'
      case 6 || 7 || 8:
        return 'winter'
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Header />
        <div style={{ marginBottom: 40 }}>
          <Routes>
            <Route path="/" element={<SearchRecipe />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes/:ingredient/:id" element={<Recipe />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
