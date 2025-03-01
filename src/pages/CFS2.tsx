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
      className="relative flex flex-col xl:flex-row items-center justify-center h-[50vh] md:h-screen px-6 xl:px-20"
    >
      {/* Background Grid */}
      <motion.img
        src="/Grids/grid lines.png"
        alt="Grid Background"
        className="absolute -z-10 h-full w-full object-cover blur-effect"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
      />

      {/* Text Section */}
      <div className="flex flex-col">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        className="text-center lg:text-left"
      >
        <h2 className="text-[#34A853] text-3xl xl:text-5xl font-bold">
          Call for Speakers
        </h2>
        <p className="text-lg xl:text-2xl mt-2">Join the WOW revolution.</p>
      </motion.div>
    
      <div className="flex justify-center items-center h-[60vh] w-[50vw] bg-blue-400">
        hello world
      </div>
      </div>
    </div>
  );
}

export default CFS2;
