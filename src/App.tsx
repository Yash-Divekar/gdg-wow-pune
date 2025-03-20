import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  Home,
  Previous_speaker,
  Previous_Sponcers,
  FAQ,
  Footer,
  CFS,
  About,
  Events,
} from "./pages/index";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Ensures at least 1 second delay
    };

    if (document.readyState === "complete") {
      handleLoad(); // If page is already loaded
    } else {
      window.addEventListener("load", handleLoad); // Wait for page load
    }

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup event listener
    };
  }, []);

  return (
    <main className="font-sans overflow-x-hidden w-full min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}

export default App;
