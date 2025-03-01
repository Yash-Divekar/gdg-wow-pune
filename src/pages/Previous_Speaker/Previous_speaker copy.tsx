import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import speakersData from "./Speakers.json";

function PreviousSpeaker() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Preload next image
  useEffect(() => {
    const img = new Image();
    img.src = speakersData[currentSpeaker].image;
  }, [currentSpeaker]);

  // Auto-cycle speakers every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % speakersData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="relative xl:p-30 flex items-center justify-center h-[50vh] md:h-screen outline"
    >
      {/* Background Image */}
      <motion.img
        src="/Grids/grid lines.png"
        alt="Grid Background"
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
      <div className="mt-10">
      <div className="flex flex-col justify-center items-center lg:mt-10">
        {/* Speaker Image Container */}
        <div className="relative flex justify-center items-center w-[80%]">
          <div className="relative">
            <motion.div
              className=" absolute top-[-2vh] left-[25vw] w-[30vw] md:w-[30vw] lg:w-[20vw] text-center text-sm md:text-lg xl:text-2xl font-semibold py-1 xl:py-2 bg-blue-200 outline-2 md:outline-3 outline-blue-500 text-blue-500 rounded-4xl z-10"
              initial={{ y: "50%", scale: 1.2, opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
            >
              Previous Speaker
            </motion.div>
            <div className="z-0">
              <img
                src="/Doddles/Green_Quote.png"
                alt="Green Quote"
                className="absolute w-[10vw] top-[-5vw] left-[2vw] rotate-160"
              />
              <img
                src="/Doddles/Green_Quote.png"
                alt="Green Quote"
                className=" -rotate-30 absolute w-[10vw] top-[13vw] md:top-[10vw] right-[2vw]"
              />
            </div>

            <img
              src={speakersData[currentSpeaker].image}
              alt="Speaker"
              className="speaker_shape z-10"
            />

            <div className="z-20">
              <img
                src="/Doddles/Green_Quote.png"
                alt="Green Quote"
                className="absolute w-[10vw] top-[-5vw] left-[-5vw] rotate-160"
              />
              <img
                src="/Doddles/Green_Quote.png"
                alt="Green Quote 3"
                className=" -rotate-30 absolute w-[10vw] top-[13vw] md:top-[10vw] right-[-5vw]"
              />
            </div>

            <div className="hidden md:block md:absolute md:bottom-10 md:right-5 bg-red-500 md:w-[25vw] rounded-lg p-3">
              <h3 className="text-center text-sm md:text-2xl font-semibold">
                {speakersData[currentSpeaker].name}
              </h3>
              <hr />
              <p className="text-center text-xs md:text-lg">
                {speakersData[currentSpeaker].description}
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-red-500 w-[60vw] rounded-lg p-3 mt-2 md:hidden">
          <h3 className="text-center text-basic md:text-2xl font-semibold">
            {speakersData[currentSpeaker].name}
          </h3>
          <hr />
          <p className="text-center text-xs md:text-lg">
            {speakersData[currentSpeaker].description}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PreviousSpeaker;
