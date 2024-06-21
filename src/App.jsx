import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/NavSection/Navbar'
import HeroSlides from './Components/HeroSection/HeroSlides'
import RowSection from './Components/Row-Section/RowSection'
import Stickydiv from './Components/Stickyquestion/Stickydiv'
import Lifestyle from './Components/LifestyleSection/Lifestyle'
import CorporateSavings from './Components/CoporateSection/CorporateSavings'
import Popular from './Components/MostPopularSection/Popular'
import TwelveDivs from './Components/The12Compnent/TwelveDivs'





function App() {
  
  return (
    <>
      <Navbar />
      <HeroSlides />
      <RowSection />
      <Lifestyle />
      <CorporateSavings />
      <Popular />
      <TwelveDivs/>
    
      

      <Stickydiv />
    </>
  )
}

export default App
