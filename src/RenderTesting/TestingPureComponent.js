import React from 'react'

class TestingPureComponent extends React.PureComponent {
  static whyDidYouRender = true
  render() {
    console.log("BigListPureComponent Re-Render! - We don't want to get here too often.")
    return (
      <div style={this.props.style}>
        <h2>BigListPureComponent</h2>
      </div>
    )
  }
}

export default TestingPureComponent
