import "./App.css";
import Navbar from "./components/Navbar2";
import { Home, Previous_speaker, Previous_Sponcers, FAQ, Footer, CFS, About, Events} from "./pages/index";


function App() {
  return (
    <main className="font-sans">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      
      <div id="about">
        <About />
      </div>
      <div id="speaker">
        <Previous_speaker />
      </div>
      <div id="cfs">
        <CFS />
      </div>
      <div id="sponsor">
        <Previous_Sponcers />
      </div>
      <div id="glimpses">
        <Events />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      
      <Footer />

      
    </main>
  );
}


export default App;
