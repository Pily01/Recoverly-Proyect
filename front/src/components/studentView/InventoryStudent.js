///////////////////////////////////////////////////////////////
///////////// I N V E N T O R Y   S T U D E N T ///////////////
//////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import Navbar from '../helpers/Navbar';
import Inventory from "../helpers/Inventory"

export default class InventoryStudent extends Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
  }
  
  render() {
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="inventoryBanner">
          <p className="hugeLetter">Categories</p>
        </div>
        <Inventory/>
      </div>
    )
  }
}
