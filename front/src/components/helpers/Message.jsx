import React from 'react'

const Message = ({closeMessage, open}) => {
  return (
    <div>
      {open ? <div className="ui success message">
      <i onClick={closeMessage} className="close icon"></i>
      <div className="header">
        You added your item succesfully.
      </div>
      <p>You may now view your item in your inventory</p> </div> : <div></div>}
    </div>
  )
}

export default Message

