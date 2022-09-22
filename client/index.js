import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain="roa22-tomas.au.auth0.com"
      clientId="6MhzntaEMTJ3mltZq6YMNqWbsHV5okaw"
      redirectUri={window.location.origin}
      audience="https://seasoned/api"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
