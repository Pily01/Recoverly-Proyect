////////////////////////////////////////////////////////////////////////////
/////////////// K I T C H E N   S T U D E N T  V I E W /////////////////////
////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import kitchenItems from "../../Jsons/kitchen.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from "../helpers/Navbar"
import Message from '../helpers/Message'

export default class KitchenStudent extends Component {
  state = {
    kitchenItems: [],
    open: false
  }
  componentDidMount = () => {
    this.setState({kitchenItems})
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

  drawItemBox = () => {
    const {kitchenItems} = this.state
    return kitchenItems.map((item, index) => <ItemBox openMessage={this.openMessage} onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
  }

  onChangeQty = (e) => {
    const {kitchenItems} = this.state
    kitchenItems[e.target.name].quantity = e.target.value
    this.setState({kitchenItems})
  }


  render() {
    const {drawItemBox, closeMessage} = this
    const { open } = this.state
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="kitchenBanner">
          <p className="hugeLetter">Kitchen</p>
        </div>
        <div className="ui link cards">
          {drawItemBox()}
        </div>
        <Message closeMessage={closeMessage} open={open}/>
      </div>
    )
  }
}