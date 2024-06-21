import React from 'react'
import './CorporateSavings.css'

const CorporateSavings = () => {
  return (
      <div className='CorporateSavingsWrap'>
          <div className="corporate-slider">
              <div className="slid" id='slid-1'></div>
              <div className="slid"></div>
          </div>
          <div className="corporate-learn">
              <div className="corporate-learn-inner">
                  <h4>Corperate Governance</h4>
                  <p>Get to know more about our values and governance practices.</p>
                  <button className='btn-3'>LEARN MORE</button>
              </div>
          </div>
          <div className="corporate-savings-Div"></div>
    </div>
  )
}

export default CorporateSavings