/////////////////////////////////////////////
/////// N A V B A R  C O M P O N E N T///////
/////////////////////////////////////////////

import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar({main, link1, link2, link3, link4}) {
  return (
    <div>
      <div>
        <div className="ui four item menu navbar">
        <Link className="item" to={`/${main}/${link1}`}>
          {link1}
        </Link>
         <Link className="item" to={`/${main}/${link2}`}>
          {link2}
        </Link>
         <Link className="item" to={`/${main}/${link3}`}>
          {link3}
        </Link>
         <Link className="item" to={`/${main}/${link4}`}>
          {link4}
        </Link>

        </div>
      </div>
    </div>
  )
}

