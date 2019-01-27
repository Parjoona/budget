import React, { Component } from 'react'

export default class LoginPage extends Component {
  state = {

  }

  onSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Login name" />
        <input type="password" />
        <button>Submit</button>
      </form>
    )
  }
}