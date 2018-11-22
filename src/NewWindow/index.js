import React from 'react'
import styled from 'styled-components'
import WindowPortal from './WindowPortal'

const ButtonStyle = styled.button`
  padding: 8px 16px;
  background: crimson;
  color: white;
  border: none;
  font-size: inherit;
`

class NewWindow extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      showWindowPortal: false
    }

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this)
    this.closeWindowPortal = this.closeWindowPortal.bind(this)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      this.closeWindowPortal()
    })

    window.setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1
      }))
    }, 1000)
  }

  toggleWindowPortal() {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }))
  }

  closeWindowPortal() {
    this.setState({ showWindowPortal: false })
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>

        <ButtonStyle onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
        </ButtonStyle>

        {this.state.showWindowPortal && (
          <WindowPortal closeWindowPortal={this.closeWindowPortal}>
            <h1>Counter in a portal: {this.state.counter}</h1>
            <p>Even though I render in a different window, I share state!</p>

            <ButtonStyle onClick={() => this.closeWindowPortal()}>Close me!</ButtonStyle>
          </WindowPortal>
        )}
      </div>
    )
  }
}

export default NewWindow

// https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202
// https://codepen.io/davidgilbertson/pen/xPVMqp?editors=0111
