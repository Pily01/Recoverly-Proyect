import React, { Component } from 'react'
import bedroomItems from "../../Jsons/bedroom.json"
import itemBox from "../helpers/itemBox"
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
    return bedroomItems.map((item, index) => <itemBox onChangeQty={this.onChangeQty} arrayPos={index} key={index} {...item}/> )
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
        <Navbar/>
        <div className="ui link cards">
          {drawItemBox}
        </div>
      </div>
    )
  }
}
