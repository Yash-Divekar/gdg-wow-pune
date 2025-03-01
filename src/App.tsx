import "./App.css";
import Navbar from "./components/Navbar";
import { Home, Previous_speaker, Previous_Sponcers, FAQ, Footer, CFS, About, Events} from "./pages/index";


function App() {
  return (
    <main className="font-sans w-full">
      <Navbar />
      <div id="home">
        <Home />
      </div>
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
      <section id="glimps">
        <Events />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      
      <Footer />
    </main>
  );
}


export default App;
