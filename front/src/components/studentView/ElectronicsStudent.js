///////////////////////////////////////////////////////////////////////////////////////////
/////////////////// E L E C T R O N I C S   S T U D E N T  V I E W ////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import electronicItems from "../../Jsons/electronics.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js'
import Message from "../helpers/Message"

export default class ElectronicsStudent extends Component {
  state = {
    electronicItems: [],
    open: false
  }

  componentDidMount = () => {
    this.setState({electronicItems})
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
        <div className="ui link cards dorms">
          {drawItemBox()}
        </div>
        <Message closeMessage={closeMessage} open={open}/>
      </div>
    )
  }
}
