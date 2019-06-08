import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const IntersectionObserver = () => {
  const ref = useRef()
  const inView = useInView(ref, {
    /* Optional options */
    threshold: 0
  })
  console.log(inView)
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  )
}

export default IntersectionObserver

// https://github.com/thebuilder/react-intersection-observer
// https://github.com/thebuilder/react-scroll-percentage
