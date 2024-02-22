import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './componnents/cardList'
import SectionTwo from './componnents/section-2'
import SectionThree from './componnents/section-three'
import SectionFoure from './componnents/SectionFoure'
import SectionFive from './componnents/SectionFive'
import SectionSex from './componnents/SectionSex'
import Footer from './componnents/Footer'
import Slider from './componnents/Slider'
import ProgressLineBars, { ProgressBars } from './componnents/proggres'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Slider/>
    <SectionFive/>
    <SectionFoure/>
    <SectionTwo/>
    <SectionThree/>
    <CardList/>
    <SectionSex/>
    <ProgressBars/>
    <Footer/>
    
  
      
    </>
  )
}

export default App
