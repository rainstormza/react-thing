import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import App from './App'

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})

// https://github.com/kentcdodds/react-testing-library#setup
