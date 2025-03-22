import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import doodle from "./doodle.json"

function About2() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%"
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
        duration: 1
      }
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen h-full lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center py-5 pt-[10vh] lg:pt-[5vh] xl:pt-0 bg-[#E5F2FF] gap-10 lg:gap-10 md:overflow-hidden lg:overflow-auto p-4"
    >
      <div className="relative h-full w-full flex justify-center items-center ">
        <div className="relative bg-white rounded-2xl border border-[#4285F4] flex justify-center items-center lg:w-[40vw] lg:h-[60vh] md:h-[50vh] md:w-[80vw] min-h-[40vh] h-fit w-[80vw]">
          <motion.div
            className="absolute top-[-4vh] bg-[#4285F4] border border-black text-white font-semibold px-8 py-2 text-center text-base sm:text-lg rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
            }
            transition={{
              type: "spring",
              bounce: 0.6,
              duration: 0.8
            }}
          >
            About GDGOC WOW
          </motion.div>

          <div className="flex flex-col justify-center items-center w-full h-full p-4 md:p-8">
            <motion.img
              src={doodle.image_7.src}
              alt={doodle.image_7.alt } 
              className="absolute left-0 top-0 h-[16vh] md:h-[30vh] -translate-x-1/2 -translate-y-1/6"
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
                delay: 1
              }}
              whileHover={{
                rotate: [-5, 5, -5, 5, 0],
                transition: { duration: 1, repeat: Infinity }
              }}
            />
            <div className="text-center xl:text-left text-xs sm:text-base lg:text-sm xl:text-lg px-5">
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: 0.4 }}
                className="p-2"
              >
                Welcome to Google Developer Groups on Campus Wonder of Wonders -
                where innovation meets community! 🌟
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: 0.6 }}
                className="p-2"
              >
                GDGoC WoW is an extraordinary annual celebration that brings
                together the brightest minds from across our global developer
                community.
              </motion.p>
              <motion.p
                variants={textVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ delay: 0.8 }}
                className="p-2"
              >
                Join us for an incredible journey filled with learning,
                innovation, and networking opportunities that will inspire and
                empower you. No matter your skill level, background, or path,
                we're in this together - we're building more than just code -
                we're building the future!
              </motion.p>
            </div>
            <motion.img
              src={doodle.image_8.src}
              alt={doodle.image_8.alt } 
              className="absolute h-[16vh] md:h-[30vh] bottom-0 right-0 translate-x-1/2 translate-y-1/6"
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
                delay: 1.2
              }}
              whileHover={{
                rotate: [-5, 5, -5, 5, 0],
                transition: { duration: 1, repeat: Infinity }
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-0 lg:pt-[15vh]">
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          <div>
            <motion.img
              src={doodle.image_9.src}
              alt={doodle.image_9.alt } 
              className="w-[30vw] md:w-[23vw] lg:w-[20vw] xl:w-[15vw]"
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
                delay: 0.4
              }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div>
            <motion.img
              src={doodle.image_10.src}
              alt={doodle.image_10.alt } 
              className="w-[27vw] md:w-[20vw] lg:w-[17vw] xl:w-[13vw]"
            
            initial={{ y: -50, scale: 0.9, opacity: 0 }}
            animate=
            {isInView
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: -50, scale: 0.9, opacity: 0 }}
            transition=
            {{
              type: "spring",
              bounce: 0.6,
              duration: 1.2,
              delay: 0.4
            }}
            whileHover={{ scale: 1.05 }}/>
          </div>
          <div>
            <motion.img
              src={doodle.image_11.src}
              alt={doodle.image_11.alt } 
              className="w-[27vw] md:w-[20vw] lg:w-[17vw] xl:w-[13vw]"
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
                delay: 0.4
              }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div>
            <motion.img
              src={doodle.image_12.src}
              alt={doodle.image_12.alt } 
              className="w-[27vw] md:w-[20vw] lg:w-[17vw] xl:w-[13vw]"
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
                delay: 0.4
              }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
