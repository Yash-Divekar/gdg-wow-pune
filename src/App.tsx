import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import Loader from "./components/Loader";

// Keep Home as a direct import for instant load
import Home from "./pages/Home";

// Lazy load other pages
const About = lazy(() => import("./pages/About"));
const PreviousSpeaker = lazy(() => import("./pages/Previous_Speaker/Previous_speaker"));
const CFS = lazy(() => import("./pages/CFS"));
const PreviousSponsors = lazy(() => import("./pages/Previous Sponsors/Previous_Sponsors"));
const Events = lazy(() => import("./pages/Events Page/Events"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Reduced to 1 second for better UX
    };

    if (document.readyState === "complete") {
      handleLoad(); // If page is already loaded
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
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
          {/* Wrap non-essential sections in Suspense for lazy loading */}
          <Suspense fallback={<div>Loading...</div>}>
            <div id="about">
              <About />
            </div>
            <div id="speaker">
              <PreviousSpeaker />
            </div>
            <div id="cfs">
              <CFS />
            </div>
            <div id="sponsor">
              <PreviousSponsors />
            </div>
            <div id="glimpses">
              <Events />
            </div>
            <div id="faq">
              <FAQ />
            </div>
          </Suspense>
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
