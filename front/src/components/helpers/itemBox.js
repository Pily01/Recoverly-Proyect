import React from 'react'

export default function itemBox({name, image, arrayPos, quantity, onChangeQty}) {
  return (
    <div>
      <div className="card">
    <div className="image">
      <img src={image}/>
    </div>
    <div className="content">
      <div className="header">{name}</div>
    </div>
    <div className="extra content">
      <input
        onChange={onChangeQty}
        name={arrayPos}
        className="input"
        type="number"
        value={quantity}
      />
      <button name={arrayPos} className="button is-info">
        +
      </button>
    </div>
  </div>
    </div>
  )
}
