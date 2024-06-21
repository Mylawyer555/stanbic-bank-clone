import React from 'react'
import './Lifestyle.css'

const Lifestyle = () => {
  return (
      <div className='Lifestyle-wrap'>
          <div className="lifestyle-top">
              <h4>Want Solutions to suit your lifesytle?</h4>
              <p>Spend and manage your money the way you want</p>
              <button className='lifeBtn'>TELL ME MORE</button>
          </div>
          <div className="lifestyle-bottom">
              <div className="ls-smldivwrap">
                  <div className="smalldiv">
                  <i class="bi bi-shield-check"></i>
                    <p>Banking App</p>
                  </div>
                  <div className="smalldiv">
                     
                      <img src="./images/internet banking.png" alt="" />
                    <p>Internet Banking</p>
                  </div>
                  <div className="smalldiv">
                      <img src="./images/Debit cards.png" alt="" />
                    <p>See all debit cards</p>
                  </div>
                  <div className="smalldiv">
                      <img src="./images/credit card.png" alt="" />
                    <p>See all credit cards</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Lifestyle