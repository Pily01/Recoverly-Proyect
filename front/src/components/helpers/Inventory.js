///////////////////////////////////////////////////////////////////
///////////// I N V E N T O R Y   C O M P O N E N T ///////////////
///////////////////////////////////////////////////////////////////

import React from 'react'
import {Link} from "react-router-dom"


export default function Inventory() {
  return (

    <div>
      <div class="ui three column grid">
        <div class="column">
         <div class="ui segment">
           <img className="inventoryImg" src="https://bethanydillon.com/wp-content/uploads/2018/04/senior-friendly-bathroom.jpeg"/>
           <Link to="/inventory/bathroom">
              <button class="fluid ui yellow big button">Bathroom</button>
           </Link>
           
         </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img className="inventoryImg" src="http://blogs.law.nyu.edu/lifeatnyulaw/wp-content/uploads/09-0804-081.jpg"/>
            <Link to="/inventory/bedroom">
              <button class="fluid ui yellow big button">Bedroom</button>
            </Link>
            

          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img className="inventoryImg" src="https://assets.blog.foodnetwork.ca/files/2015/09/888_cooking-smells-in-kitchen.jpg"/>
            <Link to="/inventory/kitchen">
              <button class="fluid ui yellow big button">Kitchen</button>
            </Link>
            
          </div>
        </div>
      </div>

      <div class="ui two column grid">
        <div class="column">
         <div class="ui segment">
           <img className="inventoryImg2" src="https://d3b8hk1o42ev08.cloudfront.net/wp-content/uploads/2018/09/unnamed.jpg"/>
           <Link to="/inventory/electronics">
             <button class="fluid ui yellow big button">Electronics</button>
           </Link>
           
         </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <img className="inventoryImg2" src="https://www.usq.edu.au/-/media/usq/library/study-support/directory-images/usqstock1117_kf_0137.ashx"/>
            <Link to="/inventory/school">
              <button class="fluid ui yellow big button">School</button>
            </Link>
            
          </div>
        </div>
      </div>

    </div>
  )
}
