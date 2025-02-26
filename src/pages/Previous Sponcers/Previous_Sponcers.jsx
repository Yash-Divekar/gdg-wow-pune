import React, { useRef, useState } from "react";
import Sponsors from "./Sponcers.json";

function Previous_Sponsors() {
  const [year, setYear] = useState("2024");
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative bg-red-100 py-20 sm:py-8 px-3 sm:px-4 min-h-[50vh] overflow-hidden"
      style={{ backgroundImage: "url('/Grids/grid dots.svg')" }}
    >
      <div className="flex flex-col h-full">
        {/* Title */}
        <div className="inline-block mb-4 sm:mb-6">
          <div className="flex justify-center sm:justify-end">
            <h2 className="text-white text-base sm:text-xl md:text-2xl font-semibold bg-red-500 px-4 py-2 rounded-full shadow-lg text-center w-auto sm:w-auto sm:mr-6">
              Previous Sponsors
            </h2>
          </div>
        </div>

        {/* Sponsors Grid with Custom Horizontal Scrollbar */}
        <div className="relative overflow-x-auto w-full flex justify-center rounded-xl">
          <div
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-scroll snap-x snap-mandatory w-full max-w-full sm:max-w-[95%] rounded-xl
              custom-horizontal-scrollbar "
          >
            <div className="grid grid-rows-2 xs:grid-rows-2 grid-flow-col gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-xl shadow-xl w-max ">
              {Sponsors[year]?.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between w-[100px] h-[130px] xs:w-[120px] xs:h-[140px] sm:w-[150px] sm:h-[160px] p-2 sm:p-3 border border-gray-200 rounded-lg shadow-sm bg-gray-50 transition hover:shadow-lg snap-center"
                >
                  {/* Image */}
                  <div className="w-[60px] xs:w-[70px] sm:w-[90px] h-[60px] xs:h-[70px] sm:h-[90px] flex items-center justify-center rounded-lg bg-white p-2 shadow">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Sponsor Name */}
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs sm:text-sm text-black font-semibold mt-2 px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition truncate w-full"
                  >
                    {sponsor.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Buttons - Positioned at sides for better accessibility */}
          <button
            className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full hover:scale-110 transition hidden sm:block"
            onClick={scrollLeft}
          >
            <img src="/Doddles/arrows.svg" alt="Scroll left" className="h-[40px] w-auto transform rotate-180" />
          </button>
          
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full hover:scale-110 transition hidden sm:block"
            onClick={scrollRight}
          >
            <img src="/Doddles/arrows.svg" alt="Scroll right" className="h-[40px] w-auto" />
          </button>
        </div>
      </div>

      {/* Custom Horizontal Scrollbar */}
      <style jsx>{`
        /* Custom Horizontal Scrollbar */
        .custom-horizontal-scrollbar::-webkit-scrollbar {
          height: 4px; /* Thinner scrollbar for mobile */
        }
        @media (min-width: 640px) {
          .custom-horizontal-scrollbar::-webkit-scrollbar {
            height: 6px; /* Slightly larger for desktop */
          }
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444; /* Red scrollbar */
          border-radius: 6px;
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626; /* Darker red on hover */
        }
        .custom-horizontal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        /* Firefox */
        .custom-horizontal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ef4444 transparent;
        }
      `}</style>
    </section>
  );
}

export default Previous_Sponsors;