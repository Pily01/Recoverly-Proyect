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
        <div className="formContainer">
            <form className="ui form">
            <h2 class="ui center aligned icon header">
              <i class="circular users icon"></i>
              Sign Up
            </h2>
              <div className="field">
                <label>Email</label>
                <input type="email" onChange={this.handleInputs} name="email" placeholder="Email"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" onChange={this.handleInputs}  name="password" placeholder="Password"/>
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox"/>
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button className="ui yellow button" type="submit">Submit</button>
            </form>
        </div>
         
      </div>
    )
  }
}


