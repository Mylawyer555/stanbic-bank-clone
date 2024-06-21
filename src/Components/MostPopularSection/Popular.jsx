import React from 'react'
import './Popular.css'

const Popular = () => {
  return (
      <div className='PopularWrap'>
          <div className="product-card-wrapper">
              <div className="product-card">
                  <div className="most-popular-tag">
                     <span>Most Popular</span>
                  </div>
                  <h4>Personal Savings Account</h4>
                    
                  <div className="strip"></div>
                  <p>Open a personal savings account that allows you to transact and shop for what you want today, while saving and earning interest for tomorrow.</p>
                  <div className="depositInterest">
                      <div className="deposit">
                          <h3>N0</h3>
                          <p>Opening Deposit</p>
                      </div>
                      <div className="interest">
                          <h3>7.425%</h3>
                          <p>Interest rate</p>
                      </div>
                  </div>
                  <div className="checkbox">
                        <input type="checkbox" name="compare-check" id="compare-check" />
                        <label htmlFor="compare">Add to compare</label>
                  </div>
                  <div className="btn">
                     <button btn-4>OPEN NOW</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Popular