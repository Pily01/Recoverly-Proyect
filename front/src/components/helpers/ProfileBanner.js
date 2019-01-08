////////////////////////////////////////////////////////////////////////
//////////// P R O F I L E   B A N N E R   C O M P O N E N T ////////////
////////////////////////////////////////////////////////////////////////

import React from 'react'

export default function ProfileBanner({profileURL, schoolName, firstName, lastName, dormName, adress, email}) {
  return (
    <div>
      <div className="profile flex">
        <img className="profileImg ui small circular image center" src={profileURL}/>
      </div>
      <div className="ui segment">
       <div className="ui two column very relaxed grid">
         <div className="column">
           <p>{schoolName}</p>
           <p>{firstName}</p>
           <p>{lastName}</p>
         </div>
         <div className="column">
           <p>{dormName}</p>
           <p>{adress}</p>
           <p>{email}</p>
         </div>
       </div>
       <div className="ui vertical divider">
         INFO
       </div>
      </div>
    </div>
  )
}
