
import './HeroSlides.css'

import React from 'react'

const HeroSlides = () => {
  return (
      <div className='hero-wrapper'>
          <div className="hero-left">
              <img src='./images/stanbic banner1.jpg' alt="" />
          </div>
          <div className="hero-right">
              <h1>Update your Account with your NIN and BVN.</h1>
              <h4>The CBN has mandated that all accounts without BVN and/or the NIN would not be able to carry out transactions.</h4>
              <button className='heroBtn'>CLICK HERE TO UPDATE</button>
              <div className="slidermark">
                  <div className='mark'></div>
                  <div className='mark'></div>
                  <div className='mark'></div>
                  <div className='mark'></div>
                  <div className='mark'></div>
                  <div className='mark'></div>
                  <div className='mark'></div>
              </div>
              
          </div>
    </div>
  )
}

export default HeroSlides
