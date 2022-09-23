import React from 'react'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'

import { Typography } from '@mui/material'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const user = useSelector((state) => state.loggedInUser)
  const { logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <IfAuthenticated>
        <NavLink to="/" onClick={handleLogOff}>
          Log off
        </NavLink>
        <Typography variant="body1">{user.username}</Typography>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <NavLink to="/" onClick={handleSignIn}>
          Sign In
        </NavLink>
      </IfNotAuthenticated>
    </div>
  )
}

export default Nav
