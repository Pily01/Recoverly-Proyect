import React from 'react'

export default function DormBox({name, image, adress, number}) {
  return (
    <div>
      <div className="ui card thirty">
        <div class="ui fluid image">
          <div class="ui yellow ribbon label">
          <i class="recycle icon"></i> {number}
          </div>
          <img src={image} className="dormImg" alt="dorm"/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">
            {adress}
          </div>
        </div>
      </div>
    </div>
  )
}
