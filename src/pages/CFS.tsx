import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CFS() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%",
  });

  return (
    <div
      ref={ref}
      className="relative min-h-screen/2 sm:min-h-screen flex flex-col gap-10 px-10 md:px-20 pb-10 sm:py-16"
    >
      {/* Background Grid */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[80%] flex items-center justify-center z-0 overflow-hidden"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 0.7, y: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <motion.img
          src="/Grids/grid lines.png"
          alt="Grid Background"
          className="w-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Heading and Description */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        className="text-center md:text-left"
      >
        <h2 className="text-[#34A853] text-3xl md:text-5xl font-bold">
          Call for Speakers
        </h2>
        <p className="text-lg md:text-2xl mt-2">Join the WOW revolution.</p>
      </motion.div>

      {/* Floating Images */}
      <motion.img
        src="/Doddles/image_15.png"
        alt=""
        className="absolute left-4/9 sm:left-2/5 -rotate-30 bottom-[5vh] w-1/3 sm:w-28 md:w-56 -translate-x-[calc(50%+10rem)] z-20"
        initial={{ y: 100, rotate: -30, scale: 0.8, opacity: 0 }}
        animate={
          isInView
            ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
            : { y: 100, rotate: -15, scale: 0.8, opacity: 0 }
        }
        transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.6 }}
      />
      <motion.img
        src="/Doddles/image_16.png"
        alt=""
        className="absolute left-2/6 sm:left-1/2 -rotate-20 bottom-[10vh] w-1/6 sm:w-24 md:w-40 translate-x-[calc(50%+10rem)] z-20 sm:z-0"
        initial={{ y: 100, rotate: 15, scale: 0.8, opacity: 0 }}
        animate={
          isInView
            ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
            : { y: 100, rotate: 15, scale: 0.8, opacity: 0 }
        }
        transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.8 }}
      />

      {/* Call to Action Section */}
      <motion.div
        className="relative flex flex-col items-center text-center gap-5 mx-auto bg-white px-6 md:px-20 py-10 md:py-20 rounded-2xl border border-black w-full md:w-[40vw] shadow-2xl z-10"
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={
          isInView
            ? { y: 0, scale: 1, opacity: 1 }
            : { y: 50, scale: 0.95, opacity: 0 }
        }
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-sans font-bold bg-gradient-to-r from-[#EA4335] to-[#0046B9] text-transparent bg-clip-text">
          Your Voice Matters
        </h2>
        <p className="text-sm md:text-base">
          Share your extraordinary journey and inspire the next generation of
          innovators. Your unique perspective could spark the next technological
          revolution.
        </p>
        <motion.button
          className="bg-gradient-to-r from-[#4285F4] to-[#79ACFF] px-6 md:px-10 py-2 text-white text-basic sm:text-lg rounded-full mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Proposal Submission Coming Soon
        </motion.button>

        {/* Floating Graphics */}
        <motion.img
          src="/Doddles/image_13.png"
          alt=""
          className="absolute -top-4 left-1/12 sm:left-0 w-1/3 sm:w-32 md:w-56 -translate-x-1/2 z-20"
          initial={{ y: -100, rotate: 15, scale: 0.8, opacity: 0 }}
          animate={
            isInView
              ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
              : { y: -100, rotate: 15, scale: 0.8, opacity: 0 }
          }
          transition={{ type: "spring", bounce: 0.4, duration: 1.5 }}
        />
        <motion.img
          src="/Doddles/image_14.png"
          alt=""
          className="absolute top-0 right-0 w-1/3 sm:w-32 md:w-56 translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ y: -100, rotate: -15, scale: 0.8, opacity: 0 }}
          animate={
            isInView
              ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
              : { y: -100, rotate: -15, scale: 0.8, opacity: 0 }
          }
          transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
}
