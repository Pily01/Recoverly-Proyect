import React, { Component } from 'react'
import Navbar from "../helpers/Navbar"
import ProfileBanner from '../helpers/ProfileBanner';
import Info from '../helpers/Info';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar link1="PROFILE" link2="ADD TO INV" link3="INVENTORY" link4="CENTERS"/>
        <ProfileBanner profileURL="https://dornsife.usc.edu/tools/mytools/PersonnelInfoSystem/DOC/Student/PHIL/photo_1078846.jpg"
        schoolName="American University" firstName="Alex" lastName="Johnson" dormName="Warren Towers" adress="Commonwealth AV 700" email="alex@gmail.com"/>
        <Info moneySaved="1,380" plasticSaved="12" otherSaved="24"/>
        <button className="fluid ui teal button mediumLetter">Your Inventory</button>
      </div>
    )
  }
}