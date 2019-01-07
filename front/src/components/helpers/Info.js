import React from 'react'

export default function Info({moneySaved, plasticSaved, otherSaved}) {
  return (
    
    <div className="infoSection">
      <div className="ui inverted statistics bigLetter">
        <div className="statistic">
          <div className="value">
          <i className="money bill alternate outline icon"></i> {moneySaved}
          </div>
          <div className="label">
            Money Saved
          </div>
        </div>
        <div className="statistic">
          <div className="value">
          <i class="recycle icon"></i> {plasticSaved}
          </div>
          <div className="label">
            Plastic Saved Kg
          </div>
        </div>
        <div className="statistic">
          <div className="value">
          <i class="industry icon"></i> {otherSaved}
          </div>
          <div className="label">
            Other Material Saved Kg
          </div>
        </div>
      </div>

      
    </div>
  )
}
