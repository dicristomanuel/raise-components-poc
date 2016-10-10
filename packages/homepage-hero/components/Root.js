import React, { Component } from 'react'

class Root extends Component {
  render() {
    return (
      <div>
        <h1>HELLO WORLD!</h1>
        <h3>{ this.props.title }</h3>
      </div>
    )
  }
}

export default Root;
