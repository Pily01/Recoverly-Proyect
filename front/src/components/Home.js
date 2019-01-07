import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="ui four item menu">
          <a className="item"><img src="../../public/images/recoverly.png"/></a>
          <a className="item">Editorials</a>
          <a className="item">Reviews</a>
          <a className="item active">Upcoming Events</a>
        </div>
      </div>
    )
  }
}
