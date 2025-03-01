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

      <div>
      <motion.div
          className="text-center text-xl md:text-2xl z-50 bg-blue-200 border border-blue-600 text-blue-600 px-5 py-1 md:py-2 rounded-full font-semibold shadow-md"
          initial={{ y: "50%", scale: 1.2, opacity: 1 }}
          animate={isInView ? { y: "-420%", scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", duration: 2 }}
        >
          Previous Speaker
        </motion.div>
      </div>
    </section>
  );
}

export default PreviousSpeaker;