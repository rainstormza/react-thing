import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

it('renders without crashing', () => {
  render(<App />)
})

// https://github.com/kentcdodds/react-testing-library#setup
