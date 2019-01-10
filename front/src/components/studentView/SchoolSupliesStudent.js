//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// S C H  O O L   S U P P L I E S  S T U D E N T  V I E W ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import {Link} from "react-router-dom"
import schoolItems from "../../Jsons/schoolSupplies.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js';
import Message from "../helpers/Message"

export default class SchoolSupliesStudent extends Component {
  state = {
    schoolItems: [],
    open: false,
    user:{}
  }

  componentDidMount = () => {
    this.setState({schoolItems})
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
  }

  drawItemBox = () => {
    const {schoolItems} = this.state
    return schoolItems.map((item, index) => <ItemBox openMessage={this.openMessage} onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
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
    const {schoolItems} = this.state
    schoolItems[e.target.name].quantity = e.target.value
    this.setState({schoolItems})
  }
  render() {
    const {drawItemBox, closeMessage} = this
    const { open } = this.state
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="schoolBanner">
          <p className="hugeLetter">SCHOOL SUPPLIES</p>
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
