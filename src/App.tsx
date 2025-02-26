import "./App.css";
import Navbar from "./components/Navbar";
import {Home, Previous_speaker, Previous_Sponcers , FAQ , Footer, CFS , About} from "./pages/index";

function App() {
  return (
    <main className="font-sans w-full">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="speaker">
        <Previous_speaker />
      </section>
      <section id="cfs">
        <CFS />
      </section>
      <section id="sponsor">
        <Previous_Sponcers />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}


export default App;
