import React, { Component } from 'react'
import AOS from 'aos'

class AOSAnimation extends Component {
  componentDidMount() {
    AOS.init()
  }

  componentWillReceiveProps() {
    AOS.refresh()
  }

  render() {
    return (
      <div>
        <div data-aos="fade-up">
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
          <p>AOS</p>
        </div>
      </div>
    )
  }
}

export default AOSAnimation

// https://github.com/michalsnik/aos/tree/v2
