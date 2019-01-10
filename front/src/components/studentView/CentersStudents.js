import React, { Component } from 'react'
import Navbar from '../helpers/Navbar.js'
import centers from "../../Jsons/centers.json"
import DormBox from '../helpers/DormBox.js';

export default class CentersStudents extends Component {
  state = {
    centers:[],
    user:{}
  }

  componentDidMount = () => {
    this.setState({centers})
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
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
        <div className="ui three cards link">
          {drawDormCard()}
        </div>
        <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
          <br/>
            <div class="ui positive message">
              <i class="close icon"></i>
              <div class="header">
                Your order is ready for pick up !
              </div>
              <p>Go to your <b>closest</b> pick up center</p>
            </div>
            <br/>
            <h1 class="ui header"> <i class="code icon"></i>Your code is:  395UJK</h1>
            <br/>
            <h1 class="ui header">Remember To Bring:</h1>
            <h3 class="ui header">Your student ID</h3>
            <h3 class="ui header">A copy of your inventory</h3>
          </div>
          <div class="column">
            <img class="ui fluid image" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49732733_2192752474322241_3336208463842770944_o.png?_nc_cat=111&_nc_ht=scontent-dfw5-1.xx&oh=79c0c282e2d944e6a140bab3511e8ad4&oe=5CB88E00" alt="google"/>
          </div>
        </div>
        <div class="ui vertical divider">
          
        </div>
      </div>
      </div>
    )
  }
}
