////////////////////////////////////////////////////////////////////////////
/////////////// B A T H R O O M   S T U D E N T  V I E W ////////////////////
////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import bathroomItems from "../../Jsons/bathroom.json"
import ItemBox from "../helpers/ItemBox"
import Navbar from '../helpers/Navbar.js';

export default class BathroomStudent extends Component {
  state = {
    bathroomItems: [],
  }

  componentDidMount = () => {
    this.setState({bathroomItems})
  }

  drawItemBox = () => {
    const {bathroomItems} = this.state
    return bathroomItems.map((item, index) => <ItemBox onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
  }

  onChangeQty = (e) => {
    const {bathroomItems} = this.state
    bathroomItems[e.target.name].quantity = e.target.value
    this.setState({bathroomItems})
  }

  render() {
    const {drawItemBox} = this

    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="bathroomBanner">
          <p className="hugeLetter">BATHROOM</p>
        </div>
        <div className="ui link cards">
          {drawItemBox()}
        </div>
      </div>
    )
  }
}

