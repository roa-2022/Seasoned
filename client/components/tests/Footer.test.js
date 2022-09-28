/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import store from '../../store'

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
