import React from 'react'
// import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { useStyles } from '../styles/styles'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Toolbar,
  // Typography,
} from '@material-ui/core'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Nav() {
  // const user = useSelector((state) => state.loggedInUser)
  const { logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

  const classes = useStyles()

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
      <AppBar position="relative">
        <Toolbar className={classes.navToolbar}>
          <Grid container justifycontent="flex-start">
            <Button className="navButton" color="inherit" onClick={handleHome}>
              Home
            </Button>
          </Grid>
          <Grid container justifycontent="flex-end">
            <Grid item>
              <div>
                <IfAuthenticated>
                  <Button
                    startIcon={<AccountCircleIcon />}
                    className={classes.navButton}
                    color="inherit"
                    onClick={handleLogOff}
                  >
                    Log off
                  </Button>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <Button
                    startIcon={<AccountCircleIcon />}
                    className={classes.navButton}
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
