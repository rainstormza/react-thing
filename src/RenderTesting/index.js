import React, { useState } from 'react'
import TestingPureComponent from './TestingPureComponent'

const bigListStyle = { width: '100%' }

function RenderTesting() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TestingPureComponent style={{ width: '100%' }} /> {/* render everytime that state update */}
      <TestingPureComponent style={bigListStyle} /> {/* not render */}
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increase!
      </button>
    </div>
  )
}

export default RenderTesting

// https://medium.com/welldone-software/why-did-you-render-mr-big-pure-react-component-2a36dd86996f
