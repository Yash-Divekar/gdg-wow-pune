import "./App.css";
import Footer from "./pages/footer";
import { LayoutGridDemo } from "./pages/previousevents";
//import { WhatToExpect } from './pages/whattoexpect'
import BeautifiedFAQs from "./pages/faq";
import { HeroDemo } from "./pages/hero";
import { NavBarDemo } from "./pages/navbar";
import Feature from "./pages/feature";
import { CaseDemo } from "./pages/previousspeaker";
import GoogleCallToSpeakers from "./pages/speaker";
import SponsorsGrid from "./pages/previoussponsors";

function App() {
  return (
    <>
      <div>
        <NavBarDemo />

        <section id="home">
          <HeroDemo />
        </section>

        <section id="about">
          <Feature />
        </section>

        <section id="speaker">
          <CaseDemo />
          <GoogleCallToSpeakers />
        </section>

        <section id="sponsors">
          <SponsorsGrid />
        </section>

        <section id="events">
          <LayoutGridDemo />
        </section>

        <section id="faq">
          <BeautifiedFAQs />
        </section>

        <section id="footr">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
