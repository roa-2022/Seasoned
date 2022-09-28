/**
 * @jest-environment jsdom
 */
import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../App'
import store from '../../store'
