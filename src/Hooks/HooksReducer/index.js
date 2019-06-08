import React, { useReducer } from 'react'
import { reducer } from './reducers'

function HooksReducer({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <>
      {' '}
      Count: {state.count} <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>{' '}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>{' '}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>{' '}
    </>
  )
}

export default HooksReducer

// https://medium.com/@rossbulat/the-future-of-react-reducers-and-global-state-management-30cda8a3b082
