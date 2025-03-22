import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Question from "./Question.json";
import SocialLinks from "../../components/SocialsLinks.tsx";
import doodle from "../doodle.json";
import { imageMap } from '../../assets/ImageMap';

interface FAQItem {
  Question: string;
  Answer: string;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.1 * i
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 md:py-16 md:px-8 lg:px-12 bg-green-200 relative overflow-hidden"
    >
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-start"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: 0.2
          }}
        >
          <motion.h3
            className="mb-4 py-2 px-4 bg-green-500 text-white rounded-full text-center text-base sm:text-lg md:text-xl lg:text-2xl w-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.4
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            FAQ's
          </motion.h3>

          <motion.h2
            className="text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.5
            }}
          >
            Got Any Questions?
          </motion.h2>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.6
            }}
          >
            Find answers to the most asked questions about GDSC WOW Pune event
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-8 md:mt-12 w-full">
          <ul className="w-full max-w-4xl mx-auto">
            {(Question.FAQ as FAQItem[]).map((Item, index) => (
              <motion.div
                key={index}
                className="mb-3"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                variants={fadeInUpVariants}
              >
                <motion.div
                  className={`flex items-center bg-white p-3 sm:p-4 md:p-5 w-full outline justify-between cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg font-semibold ${
                    openIndex === index ? "rounded-t-xl" : "rounded-xl"
                  }`}
                  onClick={() => toggleDropdown(index)}
                  whileHover={{
                    backgroundColor: "#f8f8f8",
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className="px-2 sm:px-3 md:px-5">{Item.Question}</h4>
                  <motion.img
                    src={doodle.image_6.src}
                    alt={doodle.image_6.alt}
                    loading="lazy"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 flex-shrink-0 -rotate-60"
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            duration: 0.3
                          },
                          opacity: {
                            duration: 0.2,
                            delay: 0.1
                          }
                        }
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            duration: 0.3
                          },
                          opacity: {
                            duration: 0.2
                          }
                        }
                      }}
                      className="bg-gray-200 rounded-b-xl w-full outline outline-t-0 overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.3,
                            delay: 0.1
                          }
                        }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base"
                      >
                        <p>
                          {Item.Answer.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </ul>
        </div>

        {/* Contact section */}
        <motion.div
          className="flex flex-col gap-2 justify-center items-center mt-10 md:mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.7
          }}
        >
          <p className="text-sm sm:text-base md:text-lg">
            Have more Questions?
          </p>
          <motion.a
            href="mailto:gdgocwowpune@gmail.com"
            className="text-sm sm:text-base md:text-lg bg-green-500 text-white py-2 px-5 sm:py-3 sm:px-7 rounded-full font-semibold hover:bg-green-600 transition-colors"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#16a34a" // green-600
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>

          {/* Keep in touch section */}
          <motion.div
            className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] bg-slate-200 rounded-3xl outline p-4 sm:p-5 md:p-6 mt-8 md:mt-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8
            }}
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <motion.div
                className="md:w-3/5"
                initial={{ x: -50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.9
                }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  Keep in touch with GDGoC Pune for latest announcements
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-2">
                  Stake out #WOWPune for the latest updates and news.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-5 items-center mt-6 md:mt-0"
                initial={{ x: 50, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 1
                }}
              >
                <SocialLinks />
                <motion.img
                  src={imageMap.Main_logo.src}
                  alt={imageMap.Main_logo.alt } 
                  loading="lazy"
                  className="w-32 sm:w-36 md:w-40 mt-3 md:mt-4"
                  initial={{ scale: 0, rotate: -10, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0, opacity: 1 }
                      : { scale: 0, rotate: -10, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.3
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 2
                      }
                    }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
