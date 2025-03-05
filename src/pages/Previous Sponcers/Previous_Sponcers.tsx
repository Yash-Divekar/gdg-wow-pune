import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
      const scrollAmount = Math.min(scrollRef.current.clientWidth * 2, maxScroll / 4); // Increased scroll amount
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = Math.min(scrollRef.current.clientWidth * 2, maxScroll / 4); // Increased scroll amount
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

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
      className="relative min-h-screen h-full bg-red-100 py-[10vh] px-[5vw] overflow-hidden"
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

        {/* Sponsors Carousel with Custom Navigation */}
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
          {/* Mobile scroll indicator dots */}
          {showControls && (
            <motion.div 
              className="flex justify-center gap-1 mb-2 sm:h-[100vh] sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              {Array.from({ length: Math.ceil(maxScroll / 100) + 1 }).map((_, i) => (
                <motion.div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full ${
                    scrollPosition > i * 100 - 50 && scrollPosition < (i + 1) * 100 - 50 
                      ? 'bg-red-500' 
                      : 'bg-gray-300'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + (i * 0.05), type: "spring" }}
                />
              ))}
            </motion.div>
          )}

          {/* Carousel container */}
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
            {/* Scroll buttons - only shown on devices that need them */}
            <AnimatePresence>
              {showControls && (
                <>
                  <motion.button
                    className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white transition z-10 hidden sm:block"
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      delay: 0.7
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img 
                      src="/Doddles/arrows.svg" 
                      alt="Scroll left"
                      loading="lazy"
                      className="h-8 w-8 transform rotate-180"
                      whileHover={{
                        x: -2,
                        transition: { repeat: Infinity, repeatType: "reverse", duration: 0.3 }
                      }}
                    />
                  </motion.button>

                  <motion.button
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white transition z-10 hidden sm:block"
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20,
                      delay: 0.7
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.img 
                      src="/Doddles/arrows.svg" 
                      alt="Scroll right"
                      loading="lazy"
                      className="h-8 w-8"
                      whileHover={{
                        x: 2,
                        transition: { repeat: Infinity, repeatType: "reverse", duration: 0.3 }
                      }}
                    />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Scrollable content */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <motion.div 
                className="grid grid-rows-2 grid-flow-col auto-cols-max gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {Sponsors.map((sponsor: SponsorData, index: number) => {
                  const [imgSrc, setImgSrc] = useState(sponsor.logo);

                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center justify-between w-[120px] h-[140px] xs:w-[140px] xs:h-[160px] sm:w-[160px] sm:h-[180px] md:w-[180px] md:h-[200px] lg:w-[180px] lg:h-[200px] p-3 sm:p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 transition-all hover:shadow-md hover:bg-gray-100 snap-center"
                      variants={itemVariants}
                      custom={index}
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
                          src={imgSrc}
                          alt={`${sponsor.name} logo`}
                          onError={() => setImgSrc("/Logo/Circle logo.svg")} // Fallback image
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

                      {/* Sponsor Name */}
                      <motion.a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center text-xs sm:text-sm md:text-base text-black font-medium mt-3 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300 truncate w-full"
                        aria-label={`Visit ${sponsor.name} website`}
                        whileHover={{ 
                          backgroundColor: "#e5e7eb", // gray-200
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {sponsor.name}
                      </motion.a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop scroll indicator */}
          {showControls && (
            <motion.div 
              className="hidden sm:block w-full max-w-md mx-auto mt-4"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.9
              }}
            >
              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-red-500 rounded-full transition-all duration-300" 
                  style={{ 
                    width: `${Math.min((scrollPosition / maxScroll) * 100, 100)}%` 
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* CSS for custom scrollbar behavior */}
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
      `}</style>
    </motion.div>
  );
}

export default PreviousSponsors;