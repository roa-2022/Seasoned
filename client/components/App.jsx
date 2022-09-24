import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Recipe from './Recipe'
import SearchRecipe from './SearchRecipe'

import Register from './Register'

import { clearLoggedInUser, updateLoggedInUser } from '../actions/loggedInUser'
import { useCacheUser } from '../auth0-utils'
import { getUser } from '../api'
import TopNav from './TopNav'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#BF572B',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#EFF6EE',
    },
  },
});

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
      <TopNav/>
        
      <h1>Seasoned</h1>
        <Routes>
          <Route path="/" element={<SearchRecipe />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </ThemeProvider>
  )
}

export default App
