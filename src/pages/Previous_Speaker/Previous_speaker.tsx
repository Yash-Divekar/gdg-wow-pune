import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import speakersData from './Speakers.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PreviousSpeaker() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    const nextSpeaker = (currentSpeaker + 1) % speakersData.length;
    const img = new Image();
    img.src = speakersData[nextSpeaker].image;
  }, [currentSpeaker]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % speakersData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref} 
      className="relative py-8 md:py-16 flex items-center justify-center overflow-hidden h-screen/2 md:h-screen"
    >
      {/* Background Grid Lines */}
      <motion.img
        src="/Grids/grid lines.png"
        alt=""
        className="absolute -z-10 h-full w-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
        }
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1,
        }}
      />

      {/* Main Speaker Section */}
      <div className="relative flex flex-col items-center justify-center z-30 w-11/12 md:w-4/5 max-w-6xl mx-auto mt-10 md:mt-20">
        {/* Animated Title */}
        <motion.div
          className="absolute text-center text-xl md:text-2xl z-50 bg-blue-200 border border-blue-600 text-blue-600 px-3 py-1 md:py-2 rounded-full font-semibold shadow-md"
          initial={{ y: "50%", scale: 1.2, opacity: 1 }}
          animate={isInView ? { y: "-420%", scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2 }}
        >
          Previous Speaker
        </motion.div>

        {/* Speaker Image with Animated Quotes */}
        <div className="relative z-20 w-full">
          {/* Top-Left Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-12 md:w-24 lg:w-36 -top-8 md:-top-16 left-2 md:left-8 rotate-180 z-10"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-12 md:w-24 lg:w-36 -top-6 md:-top-12 left-16 md:left-32 rotate-180 z-10"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />

          {/* Speaker Image with Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSpeaker}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              {/* SVG Mask and Image Container */}
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full md:w-4/5 lg:w-3/4 aspect-[4/3] mx-auto">
                  {/* Lazy Loaded Image with Mask */}
                  <div className="w-full h-full" style={{ clipPath: "url(#speakerMask)" }}>
                    <LazyLoadImage
                      src={speakersData[currentSpeaker].image}
                      alt={speakersData[currentSpeaker].name}
                      effect="blur"
                      className="w-full h-full object-cover speaker_shape"
                      wrapperClassName="w-full h-full"
                    />
                  </div>
                  
                  {/* Speaker Details */}
                  <div className='absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 bg-red-500 w-28 md:w-48 lg:w-64 text-xs md:text-sm lg:text-base rounded-xl p-2 outline z-40'>
                    <h3 className='flex justify-center items-center font-semibold'>{speakersData[currentSpeaker].name}</h3>
                    <hr />
                    <p className='text-center'>{speakersData[currentSpeaker].description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>


          {/* Bottom-Right Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-12 md:w-24 lg:w-36 bottom-8 md:bottom-16 right-4 md:right-16 z-20"
            initial={{ y: 50, rotate: 200, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-12 md:w-24 lg:w-36 bottom-4 md:bottom-12 right-16 md:right-32 z-20"
            initial={{ y: 50, rotate: 200, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
}

export default PreviousSpeaker;