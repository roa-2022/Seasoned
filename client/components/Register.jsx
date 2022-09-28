import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../api'
import { updateLoggedInUser } from '../actions/loggedInUser'

import md5 from 'md5'

import { Button, TextField, Box, Typography } from '@mui/material'

function Register() {
  const user = useSelector((state) => state.loggedInUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (user.auth0_id) navigate('/')
  }, [user])

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const gravatar = `https://www.gravatar.com/avatar/${md5(user.email)}`

    const userInfo = {
      auth0_id: user.auth0_id,
      email: user.email,
      image: gravatar,
      ...form,
    }
    addUser(userInfo, user.token)
      .then(() => dispatch(updateLoggedInUser(userInfo)))
      .catch((err) => setErrorMsg(err.message))
  }

  return (
    <>
      <Typography variant="h5" align="center" sx={{ marginTop: '30px' }}>
        Please choose a username
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TextField
            sx={{ marginTop: '30px' }}
            error={Boolean(errorMsg)}
            type="text"
            id="username"
            name="username"
            label="Username"
            size="small"
            value={form.username}
            onChange={handleChange}
          />

          <Button
            sx={{ p: '7px 10px', marginTop: '30px', marginLeft: '5px' }}
            disabled={!form.username}
            variant={form.username ? 'contained' : 'outlined'}
            type="submit"
          >
            Save Profile
          </Button>
        </Box>
      </form>

      {errorMsg && <div style={{ color: 'red' }}>Error: {errorMsg}</div>}
    </>
  )
}

export default Register
