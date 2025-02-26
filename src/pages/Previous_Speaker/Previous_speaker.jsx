import React, { useRef , useState, useEffect} from 'react';
import { motion, useInView , AnimatePresence } from 'framer-motion';
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
    },5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-16 flex items-center justify-center overflow-hidden h-screen/2 sm:h-screen">
      {/* Background Grid Lines */}
      <motion.img
        src="/Grids/grid lines.png"
        alt=""
        className="absolute -z-10 h-screen w-screen"
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
      <div className="relative flex flex-col items-center justyfy-center z-30 justify-center mt-20 w-[80%]">
        {/* Animated Title */}
        <motion.div
          className="absolute text-center text-xl sm:mr-50 sm:text-2xl sm:w-1/3 z-50 bg-blue-200 border border-blue-600 text-blue-600 px-3 sm:py-2 rounded-full font-semibold shadow-md"
          initial={{ y: "50%", scale: 1.2, opacity: 1 }}
          animate={isInView ? { y: "-500%", scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2 }}
        >
          Previous Speaker
        </motion.div>

        
        {/* Speaker Image with Animated Quotes */}
        <div className="relative z-20 w-[100%]">
          {/* Top-Left Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-[15%] -top-1/10 right-10/12 sm:-top-1/8 sm:left-1/10 sm:w-36 rotate-[180deg] z-12"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute w-[15%] -top-1/10 -left-1/12 sm:-top-1/8 sm:left-[20px] sm:w-36 rotate-[180deg] z-10"
            initial={{ y: 100, rotate: -70, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: -20, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />

           {/* Speaker Image with Smooth Transition */}
           <AnimatePresence mode="wait">
  <motion.div 
    key={currentSpeaker} // Forces animation on change
    className="h-auto w-[100%]"
    initial={{ opacity: 0  }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.95 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {/* Lazy Loaded Image */}
    <div className="relative w-full h-full flex items-center justify-center">
  <LazyLoadImage
    src={speakersData[currentSpeaker].image}
    alt={speakersData[currentSpeaker].name}
    effect="blur"
    className="w-full h-full object-contain speaker_shape z-40"
  />
</div>



    
    {/* Speaker Details */}
    <div className='absolute bottom-1 right-1 sm:top-[85%] sm:right-[5%] bg-red-500 sm:w-[30%] w-[40%] text-xs sm:text-lg rounded-xl p-2 outline '>
      <h3 className='flex justify-center items-center font-semibold'>{`${speakersData[currentSpeaker].name}`}</h3>
      <hr />
      <p className='text-center'>{`${speakersData[currentSpeaker].description}`}</p>
    </div>
  </motion.div>
</AnimatePresence>


          {/* Bottom-Right Quotes */}
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute sm:top-1/4 sm:right-1/6 sm:w-36 w-[15%] left-7/9 top-2/7 rotate-[180deg] z-0"
            initial={{ y: 50, rotate: 200, opacity: 0 }}
            animate={isInView ? { y: 0, rotate: 150, opacity: 1 } : {}}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
          />
          <motion.img 
            src="/Doddles/Green_Quote.png" 
            alt="Quote" 
            className="absolute sm:top-1/4 sm:right-1/12 sm:w-36 w-[15%] top-2/7 left-8/9 rotate-[180deg] z-20"
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
