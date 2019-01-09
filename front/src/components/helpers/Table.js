///////////////////////////////////////////////////////////////
////////////// T A B L E   C O M P O N E N T //////////////////
////////////////////////////////////////////////////////////////

import React from 'react'

export default function Table({name,quantity,price}) {
  return (
      <tr>
       <td>{name}</td>
       <td>{quantity}</td>
       <td>{price}  $</td>
       {price === 12 ? <td className="negative">Unavailable</td> : <td className="positive">Approved</td>}
       <td>
       <div class="ui large buttons">
          <button class="ui blue basic button">Edit</button>
          <div class="or"></div>
          <button class="ui red basic button">Delete</button>
        </div>
       </td>
      </tr>
  )
}
