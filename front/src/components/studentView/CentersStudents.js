import React, { Component } from 'react'
import Navbar from '../helpers/Navbar.js'
import centers from "../../Jsons/centers.json"
import DormBox from '../helpers/DormBox.js';

export default class CentersStudents extends Component {
  state = {
    centers:[]
  }

  componentDidMount = () => {
    this.setState({centers})
  }
  drawDormCard = () => {
    const {centers} = this.state
    return centers.map((item, index) => <DormBox arrayPos={index} key={index} {...item}/> )
  }


  render() {
    const {drawDormCard} = this
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <div className="centersBanner">
          <p className="hugeLetter">PICK UP CENTERS</p>
        </div>
        <div className="ui link cards">
          {drawDormCard()}
        </div>
      </div>
    )
  }
}
