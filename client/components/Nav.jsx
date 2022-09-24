import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink, useNavigate } from 'react-router-dom'

import { Button, Typography } from '@mui/material'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const user = useSelector((state) => state.loggedInUser)
  const { logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()

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
    <div>
      <Button as={NavLink} to="/">
        Home
      </Button>
      <IfAuthenticated>
        <Button onClick={handleLogOff}>Log off</Button>
        <Typography variant="body1">{user.username}</Typography>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign In</Button>
      </IfNotAuthenticated>
    </div>
  )
}

export default Nav
