///////////////////////////////////////////////////////////////////////////////////////////
/////////////////// E L E C T R O N I C S   S T U D E N T  V I E W ////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import {Link} from "react-router-dom"
import electronicItems from "../../Jsons/electronics.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js'
import Message from "../helpers/Message"

export default class ElectronicsStudent extends Component {
  state = {
    electronicItems: [],
    open: false,
    user:{}
  }

  componentDidMount = () => {
    this.setState({electronicItems})
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
  }

  drawItemBox = () => {
    const {electronicItems} = this.state
    return electronicItems.map((item, index) => <ItemBox openMessage={this.openMessage} onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
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
    const {electronicItems} = this.state
    electronicItems[e.target.name].quantity = e.target.value
    this.setState({electronicItems})
  }
  render() {
    const {drawItemBox, closeMessage} = this
    const { open } = this.state
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="electronicsBanner">
          <p className="hugeLetter">ELECTRONICS</p>
        </div>
        <Message closeMessage={closeMessage} open={open}/>
        <div className="ui link cards dorms">
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
