import { useRef,useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import Sponsors from "./Sponcers.json";
import doodle from "../doodle.json";


interface SponsorData {
  name: string;
  logo: string;
  website: string;
}

function PreviousSponsors() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  // Character limit for sponsor names before applying scroll animation
  const nameCharLimit = 15;

  // Set up auto-scrolling animation for the carousel
  useEffect(() => {
    if (!scrollRef.current || !contentRef.current || !isInView) return;
    
    const scrollElement = scrollRef.current;
    const contentWidth = contentRef.current.scrollWidth;
    
    // Create a duplicate of sponsors for seamless looping
    const setupInfiniteScroll = () => {
      if (!contentRef.current) return;
      
      // Clone the children nodes to create a continuous loop effect
      if (contentRef.current.children.length === 1) {
        const original = contentRef.current.children[0];
        const clone = original.cloneNode(true);
        contentRef.current.appendChild(clone);
      }
    };
    
    setupInfiniteScroll();
    
    // Auto-scroll animation
    let animationId: number;
    const scrollSpeed = 0.5; // pixels per frame
    let currentPosition = scrollElement.scrollLeft;
    
    const animate = () => {
      if (!scrollRef.current || !contentRef.current) return;
      
      currentPosition += scrollSpeed;
      
      // Reset scroll position when reaching the end to create a seamless loop
      if (currentPosition >= contentWidth) {
        currentPosition = 0;
      }
      
      scrollElement.scrollLeft = currentPosition;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative min-h-screen h-full bg-red-100 py-[10%] lg:py-[10vh]  px-[5vw] overflow-hidden"
      style={{ backgroundImage: "url('/Grids/grid dots.svg')" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:px-20 flex flex-col justify-center items-center">
        {/* Title */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2
          }}
        >
          <div className="flex justify-center sm:justify-end">
            <motion.h2 
              className="text-white text-lg sm:text-base md:text-xl lg:text-2xl font-semibold bg-red-500 py-3 px-5 sm:px-6 sm:py-3 rounded-full shadow-lg text-center"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Previous Sponsors
            </motion.h2>
          </div>
        </motion.div>

        {/* Sponsors Carousel with Auto-Scrolling */}
        <motion.div 
          className="relative w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.4
          }}
        >
          {/* Carousel container with blur effects */}
          <motion.div 
            className="relative overflow-hidden w-full rounded-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.5
            }}
          >
            {/* Left blur gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            
            {/* Right blur gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide "
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div ref={contentRef} className="flex">
                <motion.div 
                  className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col auto-cols-max gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {Sponsors.map((sponsor: SponsorData, index: number) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-between w-[120px] h-[140px] xs:w-[140px] xs:h-[160px] sm:w-[160px] sm:h-[180px] md:w-[180px] md:h-[200px] lg:w-[180px] lg:h-[200px] p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 transition-all hover:shadow-md hover:bg-gray-100"
                      variants={itemVariants}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ y: 0, scale: 0.98 }}
                    >
                      {/* Image container */}
                      <motion.div 
                        className="w-[90%] h-[90%] flex items-center justify-center rounded-lg bg-white p-3 sm:p-4 md:p-5 shadow"
                        whileHover={{ 
                          scale: 1.03,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = doodle.Circle_Logo.src;
                          }}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.5,
                            delay: 0.2 + (index * 0.05)
                          }}
                        />
                      </motion.div>

                      {/* Sponsor Name with right-to-left marquee for long names */}
                      <motion.div
                        className="text-center text-xs sm:text-sm md:text-base text-black font-medium mt-3 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300 w-full overflow-hidden"
                        aria-label={`${sponsor.name}`}
                        whileHover={{ 
                          backgroundColor: "#e5e7eb", // gray-200
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {sponsor.name.length > nameCharLimit ? (
                          <div className="marquee-container">
                            <div className="marquee-content">
                              <span>{sponsor.name}</span>
                              <span className="marquee-spacer">&nbsp;&nbsp;&nbsp;</span>
                              <span>{sponsor.name}</span>
                              <span className="marquee-spacer">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </div>
                          </div>
                        ) : (
                          <p className="text-center">{sponsor.name}</p>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS for scrollbar behavior and marquee animation */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        /* Marquee animation container */
        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        
        /* Content to be animated */
        .marquee-content {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
        
        /* Space between repeated text */
        .marquee-spacer {
          display: inline-block;
        }
        
        /* Keyframes for right-to-left scrolling */
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        /* Animation will pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
}

export default PreviousSponsors;