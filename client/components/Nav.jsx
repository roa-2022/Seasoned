import React from 'react'
// import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
} from '@mui/material'

function Nav() {
  // const user = useSelector((state) => state.loggedInUser)
  const { logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const handleHome = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
    navigate('/')
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
    navigate('/')
  }

  return (
    <Box>
      <CssBaseline />
      <AppBar 
      sx={{
        backgroundColor: "#BF572B",
        fontFamily: "Bree Serif, Serif",
        color: "secondary"
      }} 
      position="relative">
        <Toolbar>
          <Grid 
          container 
          justifyContent="flex-start">
            <Button 
            color="inherit"
            variant="h6" 
            onClick={handleHome}>
              <FontAwesomeIcon icon={faHouse} />
            </Button>
          </Grid>
          <Grid 
          container 
          justifyContent="flex-end">
            <Grid item>
              <div>
                <IfAuthenticated>
                  <Button
                    startIcon={<AccountCircleIcon />}
                    color="inherit"
                    onClick={handleLogOff}
                  >
                    Log off
                  </Button>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <Button
                    startIcon={<AccountCircleIcon />}
                    color="inherit"
                    onClick={handleSignIn}
                  >
                    Sign In
                  </Button>
                </IfNotAuthenticated>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
