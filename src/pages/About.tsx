import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  const textVariants = {
    initial: { y: 20, scale: 0.95, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div 
      ref={ref} 
      className="bg-[#E5F2FF] min-h-screen w-full flex flex-col md:flex-row sm:px-0 p-7 sm:p-6 md:p-8 lg:p-10 pt-30 sm:pt-0 outline px-9"
    >
      {/* Left side content */}
      <div className="flex flex-col w-full md:w-1/2 lg:w-[45%] items-center justify-center mx-auto md:mx-0 md:ml-4 lg:ml-10 mb-10 md:mb-0">
        <motion.div
          className="bg-[#4285F4] border border-black text-white font-semibold px-8 py-2 text-center text-lg  md:text-lg lg:text-xl rounded-full w-fit mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
          }
          transition={{
            type: "spring",
            bounce: 0.6,
            duration: 0.8,
          }}
        >
          About GDGOC WOW
        </motion.div>
        <motion.div
          className="relative bg-white border-2 border-[#4285F4] rounded-2xl px-5 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-7 md:py-8 lg:py-10 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 text-xs sm:text-sm md:text-base lg:text-lg w-full max-w-xl"
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={
            isInView
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: 50, scale: 0.95, opacity: 0 }
          }
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <motion.img
            src="/Doddles/image_7.png"
            alt=""
            className="absolute px-1 sm:pr-0 w-13 sm:w-28 top-0 left-0 -translate-x-1/2 -translate-y-1/6"
            initial={{ y: -100, rotate: -15, scale: 0.8, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
                : { y: -100, rotate: -15, scale: 0.8, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.2,
              delay: 1,
            }}
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.4 }}
            className="text-center md:text-left px-3"
          >
            Welcome to Google Developer Student Clubs Wonder of Wonders - where
            innovation meets community! 🌟
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
            className="text-center md:text-left px-3"
          >
            GDSC WoW is an extraordinary annual celebration that brings together
            the brightest minds from across our global developer community.
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.8 }}
            className="text-center md:text-left px-3"
          >
            Join us for an incredible journey filled with learning, innovation, and networking opportunities that will inspire and empower you. No matter your skill level, background, or path, we're in this together - we're building more than just code - we're building the future!
          </motion.p>
        
          <motion.img
            src="/Doddles/image_8.png"
            alt=""
            className="absolute w-13 sm:w-28 bottom-0 right-0 translate-x-1/2 translate-y-1/6"
            initial={{ y: 100, rotate: 15, scale: 0.8, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, rotate: 0, scale: 1, opacity: 1 }
                : { y: 100, rotate: 15, scale: 0.8, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.7,
              duration: 1.2,
              delay: 1.2,
            }}
            whileHover={{
              rotate: [-5, 5, -5, 5, 0],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
        </motion.div>
      </div>

      {/* Puzzle piece stats - matching the mobile layout from the image */}
      <div className="grid grid-cols-2 gap-4 w-full sm:w-1/2 sm:h-1/7 sm:pt-20 mt-6 sm:mt-0 px-4 sm:px-0 pb-8 sm:pb-0" id="puzzle">
        <div className="relative">
          <motion.img
            src="/Doddles/image_9.png"
            alt="Doodle illustration showing 10000+ Participants"
            className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] mx-auto"
            initial={{ y: -50, scale: 0.9, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, scale: 1, opacity: 1 }
                : { y: -50, scale: 0.9, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 0.4,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
        
        <div className="relative">
          <motion.img
            src="/Doddles/image_10.png"
            alt="Doodle illustration showing 25+ Sessions"
            className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] mx-auto"
            initial={{ y: -50, scale: 0.9, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, scale: 1, opacity: 1 }
                : { y: -50, scale: 0.9, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 0.6,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
        
        <div className="relative">
          <motion.img
            src="/Doddles/image_11.png"
            alt="Doodle illustration showing 35+ Speakers"
            className="w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] mx-auto"
            initial={{ y: 50, scale: 0.9, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, scale: 1, opacity: 1 }
                : { y: 50, scale: 0.9, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 0.8,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
        
        <div className="relative">
          <motion.img
            src="/Doddles/image_12.png"
            alt="Doodle illustration showing 2 Days"
            className="w-full max-w-[140px] pr-5 sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] mx-auto"
            initial={{ y: 50, scale: 0.9, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, scale: 1, opacity: 1 }
                : { y: 50, scale: 0.9, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 1.0,
            }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </div>
  );
}