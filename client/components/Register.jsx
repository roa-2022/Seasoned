import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../api'
import { updateLoggedInUser } from '../actions/loggedInUser'

import md5 from 'md5'

import { Button, TextField } from '@mui/material'

function Register() {
  const user = useSelector((state) => state.loggedInUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    username: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  console.log('Register user: ', user)

  useEffect(() => {
    if (user.username) navigate('/')
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
      <h2>Complete profile set up</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          error={Boolean(errorMsg)}
          type="text"
          id="username"
          name="username"
          label="Username"
          value={form.username}
          onChange={handleChange}
        />
        <Button
          disabled={!form.username}
          variant={form.username ? 'contained' : 'outlined'}
          type="submit"
        >
          Save Profile
        </Button>
      </form>
      {errorMsg && <div style={{ color: 'red' }}>Error: {errorMsg}</div>}
    </>
  )
}

export default Register
