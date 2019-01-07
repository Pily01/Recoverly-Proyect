import React, { Component } from 'react'
import {signup} from "../../services/auth"


export default class Signup extends Component {
  state = {
    user: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {user} = this.state
    signup(user)
    .then(user => console.log(user))
    .catch(err => console.log(err))

  }

  handleInputs = (e) => {
    const {user} = this.state
    let value = e.target.value
    let input = e.target.name
    user[input] = value
    console.log(user)
    this.setState({user})
  }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit} className="login-form">
            <input onChange={this.handleInputs} name="email" placeholder="Email" />
            <input onChange={this.handleInputs}  name="password" placeholder="Password" />
            <button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </button>
      </form>
      </div>
    )
  }
}
