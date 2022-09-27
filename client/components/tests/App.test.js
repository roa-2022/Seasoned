/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import store from '../../store'

test('Renders the Nav component', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  // Expect the component to load multiple buttons
  // First button will have innerhtml containing 'Seasoned'
  expect(screen.getAllByRole('button')[0].innerHTML).toContain('Seasoned')
})

test('Sign in button renders', () => {
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

test('Search for recipe input renders', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  // Expect the component to load an input
  // Input will have placeholder containing 'Search for a recipe'
  expect(screen.getByRole('textbox').placeholder).toBe('Find a recipe')
})

test('Footer renders', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )

  // Expect the component to load a footer
  // Footer will have innerhtml containing 'Seasoned'
  expect(screen.getByRole('contentinfo').innerHTML).toContain('Seasoned')
})
