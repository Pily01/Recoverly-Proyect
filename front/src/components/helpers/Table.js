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
       {price === 12 ? <td className="negative">Denied</td> : <td className="positive">Approved</td>}
      </tr>
  )
}
