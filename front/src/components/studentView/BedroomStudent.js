///////////////////////////////////////////////////////////////////////////////
/////////////// B E D R O O M   S T U D E N T  V I E W ////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import bedroomItems from "../../Jsons/bedroom.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js';

export default class BedroomStudent extends Component {
  state= {
    bedroomItems: [],
  }
  componentDidMount = () => {
    this.setState({bedroomItems})
  }

  drawItemBox = () => {
    const {bedroomItems} = this.state
    return bedroomItems.map((item, index) => <ItemBox onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
  }

  onChangeQty = (e) => {
    const {bedroomItems} = this.state
    bedroomItems[e.target.name].quantity = e.target.value
    this.setState({bedroomItems})
  }

  render() {
    const {drawItemBox} = this

    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="bedroomBanner">
          <p className="hugeLetter">BEDROOM</p>
        </div>
        <div className="ui link cards">
          {drawItemBox()}
        </div>
      </div>
    )
  }
}
