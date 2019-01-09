//////////////////////////////////////////////////////////////////
//////////////// I T E M   B O X   C O M P O N E N T ///////////
/////////////////////////////////////////////////////////////////

import React from 'react'

export default function ItemBox({name, image, arrayPos, quantity, onChangeQty, openMessage}) {
  return (
    <div>
      <div className="card itemCard">
    <div className="image">
      <img width="300px" height="300px" src={image} alt="item"/>
    </div>
    <div className="content">
      <h3 class="ui header">{name}</h3>
    </div>
    <div className="extra content">
      <div class="ui input">
        <input
          onChange={onChangeQty}
          name={arrayPos}
          className="input"
          type="number"
          value={quantity}
        />
      </div>
      
      <button onClick={openMessage} name={arrayPos} className="ui yellow button is-info">
        +
      </button>
    </div>
  </div>
    </div>
  )
}
