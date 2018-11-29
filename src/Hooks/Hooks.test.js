import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Hooks from './index'

test('counter increments the count', () => {
  const { getByTestId } = render(<Hooks />)
  const button = getByTestId('button-counter')
  expect(button.textContent).toBe('Count: 0')
  fireEvent.click(button)
  expect(button.textContent).toBe('Count: 1')
})
