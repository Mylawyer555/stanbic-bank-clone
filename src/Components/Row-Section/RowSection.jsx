import React from 'react'
import './RowSection.css'

const RowSection = () => {
  return (
    <div className='row-container'>
      <div className="row-wrapper">
        <div className="rowDivs">
        <i class="bi bi-house-door"></i><p>I want to open a savings account</p>
        </div>
        <div className="rowDivs">
        <i class="bi bi-arrow-down-up"></i><p>I need instant loan with EZ cash</p>
        </div>
        <div className="rowDivs">
        <i class="bi bi-shield-check"></i><p>I need to use internet banking</p>
        </div>
        <div className="rowDivs" id='row1'>
        <i class="bi bi-cash-stack"></i><p>I need to access up to 80% of my mutual funds as loan</p>
        </div>
        <div className="rowDivs">
        <i class="bi bi-car-front-fill"></i><p>I need to buy a car</p>
        </div>
        <div className="rowDivs" id='row1'>
        <i class="bi bi-calculator-fill"></i><p>I need to complete service requests on my account with Quick services</p>
        </div>
      </div>
    </div>
  )
}

export default RowSection