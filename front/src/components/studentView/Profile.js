///////////////////////////////////////////////////////////////
///////////// S T U D E N T   P R O F I L E ///////////////////
///////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import Navbar from "../helpers/Navbar"
import ProfileBanner from '../helpers/ProfileBanner';
import Info from '../helpers/Info';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar main="student" link1="PROFILE" link2="SAVE" link3="INVENTORY" link4="CENTERS"/>
        <ProfileBanner profileURL="https://dornsife.usc.edu/tools/mytools/PersonnelInfoSystem/DOC/Student/PHIL/photo_1078846.jpg"
        schoolName="American University" firstName="Alex" lastName="Johnson" dormName="Warren Towers" adress="Commonwealth AV 700" email="alex@gmail.com"/>
        <Info moneySaved="1,380" plasticSaved="12" otherSaved="24"/>
        <button className="fluid ui yellow button mediumLetter">Your Inventory</button>
      </div>
    )
  }
}
