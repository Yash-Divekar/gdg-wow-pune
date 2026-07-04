import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const PreviousSpeaker = lazy(() => import("./pages/Previous_Speaker/Previous_speaker"));
const CFS = lazy(() => import("./pages/CFS"));
const PreviousSponsors = lazy(() => import("./pages/Previous Sponsors/Previous_Sponsors"));
const Events = lazy(() => import("./pages/Events Page/Events"));
const FAQ = lazy(() => import("./pages/FAQ/FAQ"));

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    if (!loading) {
      const sectionId = location.hash.replace("#", "") || "home";
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading, location]);

  const metaData = {
    home: { title: "WOW Pune | Home", description: "Book tickets for WOW Pune 2025 by GDGoC Pune, April 19-20 at MIT WPU Kothrud" },
    about: { title: "WOW Pune | About", description: "Learn about WOW Pune 2025 by GDGoC Pune" },
    speaker: { title: "WOW Pune | Speakers", description: "Meet our previous speakers for WOW Pune" },
    sponsor: { title: "WOW Pune | Sponsors", description: "Our previous sponsors for WOW Pune" },
    glimpses: { title: "WOW Pune | Glimpses", description: "Previous event highlights for WOW Pune" },
    faq: { title: "WOW Pune | FAQ", description: "Frequently asked questions about WOW Pune 2025" },
  };

  const section = location.hash.replace("#", "") || "home";

  if (loading) return <Loader />;

  return (
    <main className="font-sans overflow-x-hidden w-full min-h-screen">
      
      {/*for seo*/}
      <Helmet>
        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "WOW Pune",
            "url": "https://www.wowpune.tech",
            "description": "Official website of WOW Pune 2025, organized by Google Developer Group on Campus Pune, featuring events, speakers, sponsors, and ticket booking.",
            "sameAs": [
              "https://www.linkedin.com/company/gdgoc-pune",
              "https://linktr.ee/GDGoCWOWPune",
              "https://x.com/gdgocpune",
              "https://www.instagram.com/gdgoc.pune/"
            ],
            "potentialAction": {
              "@type": "BuyAction",
              "name": "Book Tickets",
              "target": "https://www.wowpune.tech/#/#home", // Modal opens on home page
              "description": "Book tickets for WOW Pune 2025, April 19-20 at MIT WPU Kothrud, directly on our website."
            }
          })}
        </script>
        {/* Event Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "WOW Pune 2025",
            "startDate": "2025-04-19T08:00+05:30", // April 19th, 8 AM IST
            "endDate": "2025-04-20T18:00+05:30",   // April 20th, 6 PM IST
            "location": {
              "@type": "Place",
              "name": "MIT World Peace University",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "S.No. 124, Paud Road, Kothrud",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411038",
                "addressCountry": "IN"
              }
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.wowpune.tech/#/#home", // Modal opens on home page
              "price": "499", // Replace with actual price from KonfHub
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "organizer": {
              "@type": "Organization",
              "name": "GDGoC Pune",
              "url": "https://www.wowpune.tech"
            }
          })}
        </script>
        <title>{metaData[section].title}</title>
        <meta name="description" content={metaData[section].description} />
      </Helmet>
      {/*for seo*/}
      <Navbar />
      <div id="home">
        <Home />
      </div>
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
    </main>
  );
}

export default App;