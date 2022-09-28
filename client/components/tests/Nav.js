/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom'

import App from '../App'
import store from '../../store'

it('Renders the Nav component with a button to sign in', async () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  // Expect the component to have a button with the text "Sign In"
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
})

it('Sign in button renders', async () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  // Expect the component to load multiple buttons
  // Second button will have innerhtml containing 'Sign In'
  expect(screen.getAllByRole('button')[1].innerHTML).toContain('Sign In')
})
