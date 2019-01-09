///////////////////////////////////////////////////////////////
////////////// F O O T E R   C O M P O N E N T //////////////////
////////////////////////////////////////////////////////////////


import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="ui horizontal segments">
          <div class="ui black inverted segment">
            <p>About Us</p>
          </div>
          <div class="ui black inverted segment">
            <p>Sign Up</p>
          </div>
          <div class="ui black inverted segment">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    )
  }
}
