import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  // Animation variants for consistent styling
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
      }
    }
  };

  // Different animation patterns for images
  const imageVariants = {
    topImages: {
      hidden: { y: -50, scale: 0.9, opacity: 0 },
      visible: (delay) => ({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 1.2,
          delay
        }
      })
    },
    bottomImages: {
      hidden: { y: 50, scale: 0.9, opacity: 0 },
      visible: (delay) => ({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 1.2,
          delay
        }
      })
    },
    leftImages: {
      hidden: { x: -50, scale: 0.9, opacity: 0 },
      visible: (delay) => ({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 1.2,
          delay
        }
      })
    },
    rightImages: {
      hidden: { x: 50, scale: 0.9, opacity: 0 },
      visible: (delay) => ({
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.6,
          duration: 1.2,
          delay
        }
      })
    }
  };

  return (
    <div 
      ref={ref}
      className="flex flex-col justify-center items-center w-full p-4"
    >
      {/* Title - Centered on Mobile, Left-Aligned on Desktop */}
      <motion.div 
        className='mt-[8vh] mb-5 lg:mt-[5vh] lg:ml-[10%] lg:text-left lg:self-start'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-xl md:text-2xl bg-blue-200 border border-blue-600 text-blue-600 
                      px-4 py-2 md:py-3 rounded-full font-semibold shadow-md 
                      text-center"
          variants={titleVariants}
        >
          Previous Event Glimpses
        </motion.h2>
      </motion.div>

      {/* Grid Container - Full screen height on desktop, 1.5x height on mobile */}
      <motion.div 
        className="grid max-w-screen-xl w-full h-[150vh] lg:h-screen 
                    grid-cols-2 lg:grid-cols-5 grid-rows-7 lg:grid-rows-3 gap-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Image 1 */}
        <motion.div 
          className="col-span-2 lg:col-span-2 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-blue-500 order-1 lg:order-1"
          variants={imageVariants.leftImages}
          custom={0.2}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 1.png" alt="Glimps 1" className="w-full h-full object-cover object-top" />
        </motion.div>

        {/* Image 2 */}
        <motion.div 
          className="row-span-2 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-yellow-400 order-3 lg:order-2"
          variants={imageVariants.topImages}
          custom={0.3}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 2.png" alt="Glimps 2" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 3 */}
        <motion.div 
          className="col-span-2 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-red-500 order-8 lg:order-3"
          variants={imageVariants.rightImages}
          custom={0.4}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 3.png" alt="Glimps 3" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 4 */}
        <motion.div 
          className="bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-red-500 order-2 lg:order-4"
          variants={imageVariants.rightImages}
          custom={0.5}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 4.png" alt="Glimps 4" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 5 */}
        <motion.div 
          className="row-span-2 lg:row-span-1 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-green-400 order-4 lg:order-5"
          variants={imageVariants.topImages}
          custom={0.6}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 5.png" alt="Glimps 5" className="w-full h-full object-cover" />
        </motion.div>

        {/* Image 6 */}
        <motion.div 
          className="col-span-2 row-span-1 lg:row-span-2 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-green-400 order-7 lg:order-6"
          variants={imageVariants.bottomImages}
          custom={0.7}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 6.png" alt="Glimps 6" className="w-full h-full object-cover object-top" />
        </motion.div>

        {/* Image 7 */}
        <motion.div 
          className="col-span-2 bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-blue-600 order-6 lg:order-7"
          variants={imageVariants.bottomImages}
          custom={0.8}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 7.png" alt="Glimps 7" className="w-full h-full object-cover object-bottom" />
        </motion.div>

        {/* Image 8 */}
        <motion.div 
          className="bg-indigo-300 rounded-lg flex justify-center items-center overflow-hidden border-4 border-red-500 order-5 lg:order-8"
          variants={imageVariants.leftImages}
          custom={0.9}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        >
          <img src="./Content/Glimps/image 8.png" alt="Glimps 8" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Events;