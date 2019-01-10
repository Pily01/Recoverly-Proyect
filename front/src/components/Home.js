import React, { Component } from 'react'
import Navbar from "../components/helpers/Navbar"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar main="home" link1="HOME" link2="ABOUT" link3="SIGN UP" link4="LOGIN"/>
        <div className="ui four item menu">
          <a className="item"><img src="../../public/images/recoverly.png"/></a>
          <a className="item">Editorials</a>
          <a className="item">Reviews</a>
          <a className="item active">Upcoming Events</a>
        </div>
      </div>
    )
  }
}
