import React from 'react'
import './Navbar.css'






const Navbar = () => {
  return <>
    <div className="navBar">
      <div className="header">
        <img src='./images/image1.png' alt="" />
      </div>
      <div className="navIcon">
        <i class="bi bi-search"></i>
        <i class="bi bi-list"></i>
      </div>
    </div>
  </>;
}

export default Navbar