///////////////////////////////////////////////////////////////////////////////
/////////////// B E D R O O M   S T U D E N T  V I E W ////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import {Link} from "react-router-dom"
import bedroomItems from "../../Jsons/bedroom.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js'
import Message from "../helpers/Message"

export default class BedroomStudent extends Component {
  state= {
    bedroomItems: [],
    open: false,
    user: {}
  }
  componentDidMount = () => {
    this.setState({bedroomItems})
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
  }

  drawItemBox = () => {
    const {bedroomItems} = this.state
    return bedroomItems.map((item, index) => <ItemBox openMessage={this.openMessage} onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
  }

  closeMessage = () => {
    this.setState({open:false})
  }

  openMessage = () => {
    this.setState({open:true})
    setTimeout(()=>{
      this.setState({open:false})
    },3000)
  }

  onChangeQty = (e) => {
    const {bedroomItems} = this.state
    bedroomItems[e.target.name].quantity = e.target.value
    this.setState({bedroomItems})
  }

  render() {
    const {drawItemBox, closeMessage} = this
    const { open } = this.state

    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="bedroomBanner">
          <p className="hugeLetter">BEDROOM</p>
        </div>
        
        <Message closeMessage={closeMessage} open={open}/>
        
        <div className="ui link cards">
          {drawItemBox()}
        </div>
        
        <Link to="/student/save">
          <button class="ui left attached yellow button mediumLetter">Go Back</button>
        </Link>

        <Link to="/student/inventory">
          <button class="right attached ui yellow button mediumLetter">Your Inventory</button>
        </Link>
      </div>
    )
  }
}
