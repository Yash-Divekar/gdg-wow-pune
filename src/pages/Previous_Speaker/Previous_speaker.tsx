import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import speakersData from "./Speakers.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import doodle from "../doodle.json";


// Cache images to avoid reloading
const imageCache: { [key: string]: boolean } = {};

function PreviousSpeaker() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Memoized SVG path to prevent reloading
  const speakerPolygon = useMemo(() => "/src/assets/Speaker_polygon.svg", []);

  // Preload images on mount
  useEffect(() => {
    const preloadImage = (index: number) => {
      return new Promise<void>((resolve) => {
        const imageUrl = speakersData[index].image;

        if (imageCache[imageUrl]) {
          resolve(); // Already cached
          return;
        }

        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          imageCache[imageUrl] = true;
          setImagesLoaded((prev) => ({ ...prev, [index]: true }));
          resolve();
        };
        img.onerror = () => {
          setImagesLoaded((prev) => ({ ...prev, [index]: false }));
          resolve();
        };
      });
    };

    const preloadAllImages = async () => {
      await preloadImage(0); // Load first image immediately
      await Promise.all(speakersData.slice(1).map((_, index) => preloadImage(index + 1)));
    };

    preloadAllImages();
  }, []);

  // Image cycling timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => {
        let next = (prev + 1) % speakersData.length;
        while (!imagesLoaded[next]) {
          next = (next + 1) % speakersData.length;
          if (next === prev) break;
        }
        return next;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div
      ref={ref}
      className="relative xl:p-30 flex items-center justify-center min-h-[50vh] h-full md:h-screen"
    >
      {/* Background Image */}
      <motion.img
        src={doodle.Line_Grid.src}
        alt={doodle.Line_Grid.alt } 
       className="absolute -z-10 h-full w-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
        }
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1
        }}
      />

      {/* Title */}
      <div className="mt-10 lg:w-[90%]">
        <div className="flex flex-col justify-center items-center lg:mt-10 w-full pt-2">
          {/* Speaker Image Container */}
          <div className="relative flex justify-center items-center w-[80%]">
            <div className="relative md:scale-120 md:m-10">
              <motion.div
                className="absolute top-[-15%] md:top-[-10%] left-[30%] md:left-[30%] lg:left-[30%] xl:left-[35%] w-[40%] md:w-[40%] lg:w-[35%] text-center text-sm md:text-lg xl:text-2xl font-semibold py-1 xl:py-2 bg-blue-200 outline-2 md:outline-3 outline-blue-500 text-blue-500 rounded-4xl z-10 shadow-lg"
                initial={{ y: "200%", scale: 1.5, opacity: 1 }}
                animate={isInView ? { y: "100%", scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 2 }}
              >
                Previous Speaker
              </motion.div>
              <div className="z-0">
                <motion.img
                  src="https://i.imgur.com/H2TW8Cw.png"
                  alt="Green Quote"
                  className="absolute w-[20%] md:w-[15%] top-[-20%] md:top-[-15%] left-[3%] rotate-180"
                  initial={{ y: 100, rotate: -70, opacity: 0 }}
                  animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
                  transition={{ type: "spring", duration: 1.2 }}
                />
                <motion.img
                  src="https://i.imgur.com/H2TW8Cw.png"
                  alt="Green Quote"
                  className="rotate-180 absolute w-[20%] md:w-[15%] top-[20%] md:top-[30%] right-[3%]"
                  initial={{ y: 50, rotate: 200, opacity: 0 }}
                  animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
                  transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
                />
              </div>

              {/* Speaker Image with Pre-loaded Images */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpeaker}
                  className="w-full z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <img src={speakerPolygon} alt="Speaker bg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30" />
                  {/*<img
                    src={speakersData[currentSpeaker].image}
                    alt={speakersData[currentSpeaker].name}
                    className="speaker_shape"
                    style={{ visibility: imagesLoaded[currentSpeaker] ? 'visible' : 'hidden' }}
                  />*/}

                  <LazyLoadImage
                    src={speakersData[currentSpeaker].image}
                    effect="blur" // Gives a blur effect while loading
                    alt={speakersData[currentSpeaker].name}
                    style={{ visibility: imagesLoaded[currentSpeaker] ? 'visible' : 'hidden' }}
                    className="speaker_shape"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="z-20">
                <motion.img
                  src="https://i.imgur.com/H2TW8Cw.png"
                  alt="Green Quote"
                  className="absolute w-[20%] md:w-[15%]  top-[-20%] md:top-[-15%] left-[-10%] md:left-[-7%] rotate-180"
                  initial={{ y: 100, rotate: -70, opacity: 0 }}
                  animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
                  transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
                />
                <motion.img
                  src="https://i.imgur.com/H2TW8Cw.png"
                  alt="Green Quote 3"
                  className="rotate-180 absolute w-[20%] md:w-[15%] top-[20%] md:top-[30%] right-[-10%] md:right-[-7%]"
                  initial={{ y: 50, rotate: 200, opacity: 0 }}
                  animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
                  transition={{ type: "spring", duration: 1.2 }}
                />
              </div>

              <motion.div
                className="hidden lg:block lg:absolute lg:bottom-10 lg:right-5 bg-red-500 lg:w-[25vw] rounded-lg p-3"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div key={`desktop-${currentSpeaker}`}>
                    <motion.h3
                      className="text-center text-sm lg:text-xl font-semibold"
                      custom={3}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {speakersData[currentSpeaker].name}
                    </motion.h3>
                    <motion.hr
                      custom={4}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <motion.p
                      className="text-center text-xs lg:text-base"
                      custom={2}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {speakersData[currentSpeaker].description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="bg-red-500 w-[60vw] rounded-lg p-3 mt-2 lg:hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={`mobile-${currentSpeaker}`}>
                <motion.h3
                  className="text-center text-basic md:text-xl lg:text-2xl font-semibold"
                  custom={0}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {speakersData[currentSpeaker].name}
                </motion.h3>
                <motion.hr
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.p
                  className="text-center text-xs md:text-lg lg:text-lg"
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {speakersData[currentSpeaker].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PreviousSpeaker;