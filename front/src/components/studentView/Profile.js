///////////////////////////////////////////////////////////////
///////////// S T U D E N T   P R O F I L E ///////////////////
///////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Navbar from "../helpers/Navbar"
import ProfileBanner from '../helpers/ProfileBanner';
import Info from '../helpers/Info';
import {logout} from "../../services/auth"

export default class Profile extends Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return this.props.history.push("/login")
    return this.setState({user})
  }

  logOut = () => {
    logout()
    .then(res => {
      localStorage.removeItem("user")
      this.props.history.push("/")
    }).catch(err => console.log(err))
  }

  render() { 
    const {logOut} = this
    
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <ProfileBanner profileURL="https://dornsife.usc.edu/tools/mytools/PersonnelInfoSystem/DOC/Student/PHIL/photo_1078846.jpg"
        schoolName="American University" firstName="Alex" lastName="Johnson" dormName="Warren Towers" adress="Commonwealth AV 700" email="alex@gmail.com"/>
        <Info moneySaved="1,380" plasticSaved="12" otherSaved="24"/>
        <Link to="/student/inventory">
          <button className="fluid ui yellow button mediumLetter">Your Inventory</button>
        </Link>
        <button onClick={logOut} className="fluid ui red button mediumLetter">Log out</button>
        
        
      </div>
    )
  }
}
