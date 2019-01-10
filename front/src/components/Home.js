


import React, { Component } from 'react'
import Navbar from "../components/helpers/Navbar"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar main="home" link1="HOME" link2="" link3="SIGN UP" link4="LOGIN"/>
        <div className="landing">
        </div>
        
        <div className="container">

          <div class="ui link cards container">
            <div class="ui card">
              <div class="image">
                <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/50272033_2192797480984407_6758746964336050176_n.png?_nc_cat=110&_nc_ht=scontent-dfw5-1.xx&oh=fba91454f16741d2a4a75d750ebdb6ce&oe=5C8ECB95"/>
              </div>
            </div>

            <div class="ui card">
              <div class="image">
                <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49947465_2192799964317492_6515368442030194688_n.png?_nc_cat=103&_nc_ht=scontent-dfw5-1.xx&oh=a5a9b2181c0c8076f6c6669adab23a13&oe=5CCDF907"/>
              </div>
            </div>

            <div class="ui card">
              <div class="image">
                <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/49762988_2192798630984292_3839138358131425280_n.png?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=26bfdfc830061c94591afbb863e20e6d&oe=5CD7F704"/>
              </div>
            </div>

          </div>
         
        </div>
        
        <button className="fluid ui yellow button mediumLetter">START HERE</button>
        
      </div>
    )
  }
}
