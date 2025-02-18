
import './App.css'
import Footer from './pages/footer'
import { LayoutGridDemo } from './pages/previousevents'
import { WhatToExpect } from './pages/whattoexpect'

import Faqs3 from './pages/faq'
import { HeroDemo } from './pages/hero'
import Venue from './pages/venue'
import { NavBarDemo } from './pages/navbar'
import Feature from './pages/feature'
import { CaseDemo } from './pages/previousspeaker'
import GoogleCallToSpeakers from './pages/speaker'
import CallForSponsors from './pages/calltosponsors'
import SponsorsGrid from './pages/previoussponsors'


function App() {


  return (
    <>
       <div>
        <NavBarDemo/>
        <HeroDemo/>
        {/*<Venue/>*/}
      
        <Feature/>
        
        <WhatToExpect/>

        <CaseDemo/> 
        <SponsorsGrid/>

        <GoogleCallToSpeakers/>

        <CallForSponsors/>
        
        
        <br/>
        <LayoutGridDemo/>
        <br/>
        <Faqs3/>
        
        
        
        
        <Footer/>

      </div>
    </>
  )
}

export default App
