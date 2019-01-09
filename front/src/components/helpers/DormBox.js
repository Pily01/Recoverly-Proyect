import React from 'react'

export default function DormBox({name, image, adress}) {
  return (
    <div>
      <div className="ui card">
        <div className="image">
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
