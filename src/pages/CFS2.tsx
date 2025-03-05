import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CFS2() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%"
  });

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center min-h-[50vh] h-full md:h-screen p-9 pb-10 overflow-x-clip"
    >
      {/* Background Grid */}
      <motion.img
        src="/Grids/grid lines.png"
        alt="Grid Background"
        className="absolute -z-10 h-full w-full object-cover blur-effect"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.7 } : { scale: 1.2, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1.5, ease: "easeInOut" }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Text Section */}
      <div className="w-full flex flex-col gap-1 mt-10 md:mt-0">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          className="text-center px-[5vw] md:text-left"
        >
          <h2 className="text-[#34A853] text-3xl md:text-5xl font-bold">
            Call for Speakers
          </h2>
          <p className="text-lg md:text-2xl mt-2">Join the WOW revolution.</p>
        </motion.div>
      

        <div className="flex justify-center items-center">
          <div className="relative flex justify-center mt-[5vh] h-[30vh] md:h-[50vh] xl:h-[60vh] w-[80vw] sm:w-[70vw] xl:w-[50vw]">
            <motion.div 
              className="h-full w-full relative flex flex-col items-center justify-center text-center gap-2 md:gap-5 mx-auto bg-white rounded-2xl border border-black shadow-2xl z-10 p-6 md:p-20"
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={isInView ? { y: 0, scale: 1, opacity: 1 } : { y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            >
              <motion.h2 
                className="text-xl md:text-3xl lg:text-5xl font-sans font-bold bg-gradient-to-r from-[#EA4335] to-[#0046B9] text-transparent bg-clip-text"
                initial={{ y: -20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.2 }}
              >
                Your Voice Matters
              </motion.h2>
              <motion.p 
                className="text-xs md:text-base lg:text-lg"
                initial={{ y: -10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.3 }}
              >
                Share your extraordinary journey and inspire the next generation of
                innovators. Your unique perspective could spark the next technological
                revolution.
              </motion.p>

              <motion.button 
                className="bg-gradient-to-r from-[#4285F4] to-[#79ACFF] px-6 md:px-10 py-2 text-white text-sm md:text-lg xl:text-xl rounded-full mt-2 md:mt-8"
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Proposal Submission Coming Soon
              </motion.button>
            </motion.div>

            <motion.div 
              className="absolute bottom-[-4vh] right-[-4vw] sm:bottom-[-8vh] sm:right-[-6vw] w-[10vh] sm:w-[15vw] md:w-[13vw] lg:w-[13vw] xl:w-[12vw] z-20 md:z-0 -rotate-20"
              initial={{ y: 100, rotate: 15, scale: 0.8, opacity: 0 }}
              animate={isInView ? { y: 0, rotate: -20, scale: 1, opacity: 1 } : { y: 100, rotate: 15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.8 }}
            >
              <img src="/Doddles/image_16.png" alt="" />
            </motion.div>
            <motion.div 
              className="absolute bottom-[-4vh] left-[-10vw] md:bottom-[-10vh] md:left-[-10vw] w-[15vh] sm:w-[20vw] md:w-[25vw] lg:w-[17vw] xl:w-[20vw] z-20 -rotate-30"
              initial={{ y: 100, rotate: -30, scale: 0.8, opacity: 0 }}
              animate={isInView ? { y: 0, rotate: -30, scale: 1, opacity: 1 } : { y: 100, rotate: -15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.6 }}
            >
              <img src="/Doddles/image_15.png" alt="" />
            </motion.div>
            <motion.div 
              className="absolute top-[-8vh] right-[-10vw] md:top-[-10vh] xl:top-[-20vh] md:right-[-8vw] w-[15vh] sm:w-[20vw] md:w-[25vw] lg:w-[20vw] xl:w-[20vw] z-20"
              initial={{ y: -100, rotate: -15, scale: 0.8, opacity: 0 }}
              animate={isInView ? { y: 0, rotate: 0, scale: 1, opacity: 1 } : { y: -100, rotate: -15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.2 }}
            >
              <img src="/Doddles/image_14.png" alt="" />
            </motion.div>
            <motion.div 
              className="absolute top-[-3vh] left-[-8vw] w-[15vh] xl:w-[20vw] md:w-[20vw] lg:w-[20vw] z-20 -rotate-10"
              initial={{ y: -100, rotate: 15, scale: 0.8, opacity: 0 }}
              animate={isInView ? { y: 0, rotate: -10, scale: 1, opacity: 1 } : { y: -100, rotate: 15, scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
            >
              <img src="/Doddles/image_13.png" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CFS2;