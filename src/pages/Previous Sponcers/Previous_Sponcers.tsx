import { useRef, useState, useEffect } from "react";
import Sponsors from "./Sponcers.json";

interface SponsorData {
  name: string;
  logo: string;
  website: string;
}

function PreviousSponsors() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showControls, setShowControls] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Check if scroll controls should be visible based on content width
  useEffect(() => {
    if (scrollRef.current) {
      const checkScrollWidth = () => {
        const { scrollWidth, clientWidth } = scrollRef.current as HTMLDivElement;
        setShowControls(scrollWidth > clientWidth);
        setMaxScroll(scrollWidth - clientWidth);
      };
      
      checkScrollWidth();
      window.addEventListener('resize', checkScrollWidth);
      return () => window.removeEventListener('resize', checkScrollWidth);
    }
  }, []);

  // Update scroll position for indicator
  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.8, 300);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.8, 300);
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative sm:min-h-screen bg-red-100 py-25 sm:py-25 px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{ backgroundImage: "url('/Grids/grid dots.svg')" }}
    >
      <div className="sm:px-20 flex flex-col justify-center items-center">
        {/* Title */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center sm:justify-end">
            <h2 className="text-white text-lg sm:text-base md:text-xl lg:text-2xl font-semibold bg-red-500 py-3 px-5 sm:px-6 sm:py-3 rounded-full shadow-lg text-center">
              Previous Sponsors
            </h2>
          </div>
        </div>

        {/* Sponsors Carousel with Custom Navigation */}
        <div className="relative w-full">
          {/* Mobile scroll indicator dots */}
          {showControls && (
            <div className="flex justify-center gap-1 mb-2 sm:h-[100vh] sm:hidden">
              {Array.from({ length: Math.ceil(maxScroll / 100) + 1 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full ${
                    scrollPosition > i * 100 - 50 && scrollPosition < (i + 1) * 100 - 50 
                      ? 'bg-red-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Carousel container */}
          <div className="relative overflow-hidden w-full rounded-xl">
            {/* Scroll buttons - only shown on devices that need them */}
            {showControls && (
              <>
                <button
                  className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white hover:scale-110 transition z-10 hidden sm:block"
                  onClick={scrollLeft}
                  aria-label="Scroll left"
                >
                  <img src="/Doddles/arrows.svg" alt="" className="h-8 w-8 transform rotate-180" />
                </button>

                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white hover:scale-110 transition z-10 hidden sm:block"
                  onClick={scrollRight}
                  aria-label="Scroll right"
                >
                  <img src="/Doddles/arrows.svg" alt="" className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="grid grid-flow-col auto-cols-max gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg mx-auto">
              {Sponsors.map((sponsor: SponsorData, index: number) => {
                  const [imgSrc, setImgSrc] = useState(sponsor.logo);

                  return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between w-[160px] h-[180px] xs:w-[180px] xs:h-[200px] sm:w-[200px] sm:h-[230px] md:w-[220px] md:h-[250px] lg:w-[240px] lg:h-[280px] p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 transition-all hover:shadow-md hover:bg-gray-100 snap-center"
                  >
                    {/* Image container - INCREASED SIZE for all viewports */}
                    <div className="w-[100px] xs:w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[100px] xs:h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] flex items-center justify-center rounded-lg bg-white p-3 sm:p-4 md:p-5 shadow">
                        <img
                          src={imgSrc}
                          alt={`${sponsor.name} logo`}
                          onError={() => setImgSrc("/Logo/Circle logo.svg")} // Fallback image
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                        />
                    </div>

                    {/* Sponsor Name */}
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-xs sm:text-sm md:text-base text-black font-medium mt-3 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300 truncate w-full"
                      aria-label={`Visit ${sponsor.name} website`}
                    >
                      {sponsor.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop scroll indicator */}
          {showControls && (
            <div className="hidden sm:block w-full max-w-md mx-auto mt-4">
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-500 rounded-full transition-all duration-300" 
                  style={{ 
                    width: `${Math.min((scrollPosition / maxScroll) * 100, 100)}%` 
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CSS for custom scrollbar behavior */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
}

export default PreviousSponsors;