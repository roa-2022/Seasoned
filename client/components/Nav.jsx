import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

// MUI overrides
import { useStyles } from '../styles/mui_overrides'


function Nav() {
  const user = useSelector((state) => state.loggedInUser)
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
    <>
      <div className='home-link'>
        <Button typography={
          'font'
        } color='inherit' onClick={handleHome}>Seasoned</Button>
      </div>
      
      <div className='log-in-out'>
        <IfAuthenticated>
          <Button color='inherit' onClick={handleLogOff}>
            Log off
          </Button>
          <p>{user.username}</p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Button color='inherit' onClick={handleSignIn}>
            Sign In
          </Button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
