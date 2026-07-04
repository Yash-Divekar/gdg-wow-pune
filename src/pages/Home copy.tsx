import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import doodle from "./doodle.json";
import { imageMap } from "../assets/ImageMap";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export default function Home1() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%"
  });

  {
    /*tag*/
  }
  const [activeTag, setActiveTag] = useState<"sold-out" | "early-bird">(
    "sold-out"
  );
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    // Delay showing tags by 3 seconds
    const showTagsTimer = setTimeout(() => {
      setShowTags(true);
    }, 2000);

    // Interval to switch tags every 10 seconds
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev === "sold-out" ? "early-bird" : "sold-out"));
    }, 4000);

    return () => {
      clearTimeout(showTagsTimer);
      clearInterval(interval);
    };
  }, []);

  const tagVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: -20,
      rotate: -10
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      x: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  {
    /*Konfhub button*/
  }
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.konfhub.com/widget.js";
    script.async = true;
    script.setAttribute("button_id", "btn_c55a733dcef2");

    // Append script to the button container or document body
    if (buttonRef.current) {
      buttonRef.current.appendChild(script);
    } else {
      document.body.appendChild(script);
    }

    // Cleanup: Remove script when component unmounts
    return () => {
      if (buttonRef.current && buttonRef.current.contains(script)) {
        buttonRef.current.removeChild(script);
      } else if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-04-19T08:00:00+05:30");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const toddleAnimations = [
    {
      initial: { y: -200, x: -50, rotate: 45, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 0.2,
      bounce: 0.6
    },
    {
      initial: { y: -150, x: 50, rotate: -30, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 0.5,
      bounce: 0.5
    },
    {
      initial: { y: -250, x: -30, rotate: 45, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 0.8,
      bounce: 0.7
    },
    {
      initial: { y: -180, x: 40, rotate: -20, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.1,
      bounce: 0.6
    },
    {
      initial: { y: -220, x: -20, rotate: 25, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.4,
      bounce: 0.5
    },
    {
      initial: { y: -160, x: 30, rotate: -35, opacity: 0 },
      animate: { y: 0, x: 0, rotate: 0, opacity: 1 },
      delay: 1.7,
      bounce: 0.7
    }
  ];

  const bounceVariants = {
    initial: { y: -200, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const countdownItems = [
    {
      label: "Days",
      value: timeLeft.days,
      borderColor: "#0043B2",
      headerBg: "#3061B2",
      contentBg: "#4285F4"
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      borderColor: "#BF0F00",
      headerBg: "#B23328",
      contentBg: "#EA4335"
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      borderColor: "#CCA300",
      headerBg: "#B2941B",
      contentBg: "#EABC00"
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      borderColor: "#006C1D",
      headerBg: "#2A8442",
      contentBg: "#34A853"
    }
  ];

  return (
    <div
      ref={ref}
      className="relative min-h-screen h-full w-full flex overflow-hidden"
      id="main-content"
    >
      <motion.img
        src={doodle.Line_Grid.src} // Dynamic source
        alt={doodle.Line_Grid.alt || "Background Grid"}
        fetchPriority="high"
        className="absolute -z-10 min-h-screen w-screen"
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

      <div className=" h-auto w-full flex xl:flex-row flex-col xl:gap-10">
        <div className="relative h-auto left-0">
          <motion.img
            src={imageMap.Shaniwar_Wada_With_bg.src}
            alt={imageMap.Shaniwar_Wada_With_bg.alt}
            fetchPriority="high"
            className="hidden xl:block xl:h-screen"
            initial={{ x: -100, rotate: -10, opacity: 0 }}
            animate={
              isInView
                ? { x: 0, rotate: 0, opacity: 1 }
                : { x: -100, rotate: -10, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }}
          />

          {[1, 2, 3, 4, 5, 6].map((index) => {
            const imageKey = `image_${index}` as keyof typeof doodle; // Explicitly tell TypeScript this is a valid key

            return (
              <motion.img
                key={index}
                src={doodle[imageKey]?.src || "/fallback.png"} // Use src instead of link
                alt={doodle[imageKey]?.alt || "Doodle Image"}
                className={`absolute hidden xl:block ${
                  index === 1
                    ? "w-[9vw] top-[7%] left-[2%]"
                    : index === 2
                    ? "w-[8vw] top-[10%] left-[23%]"
                    : index === 3
                    ? "w-[7vw] top-[20%] -left-[5%]"
                    : index === 4
                    ? "w-[9vw] top-[39%] left-[40%]"
                    : index === 5
                    ? "w-[6vw] top-[41%] left-[20%]"
                    : "w-[6vw] top-[40%] left-[1%]"
                }`}
                initial={toddleAnimations[index - 1].initial}
                animate={
                  isInView
                    ? toddleAnimations[index - 1].animate
                    : toddleAnimations[index - 1].initial
                }
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 12,
                  delay: isInView ? toddleAnimations[index - 1].delay : 0,
                  bounce: toddleAnimations[index - 1].bounce,
                  duration: 1.2
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: {
                    rotate: {
                      repeat: Infinity,
                      duration: 1.5
                    }
                  }
                }}
              />
            );
          })}

          <motion.img
            src={imageMap.Angle_Logo.src}
            alt={imageMap.Angle_Logo.alt}
            fetchPriority="high"
            className="absolute top-0 left-[25%] scale-[40%] hidden xl:block"
            initial={toddleAnimations[3].initial}
            animate={
              isInView
                ? toddleAnimations[3].animate
                : toddleAnimations[3].initial
            }
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 12,
              delay: isInView ? toddleAnimations[3].delay : 0,
              bounce: toddleAnimations[3].bounce,
              duration: 1.2
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: {
                rotate: {
                  repeat: Infinity,
                  duration: 2
                }
              }
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center p-5 text-black xl:ml-auto xl:text-right xl:mr-[5vw] pt-[10vh] gap-4 xl:gap-2 xl:items-center">
          <div className="flex justify-center xl:justify-end items-center xl:items-end flex-col md:flex-col xl:flex-rows text-center xl:text-right md:pt-10 lg:pt-0 lg:gap-5 xl:gap-0">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.5
              }}
            >
              <p className="text-basic sm:text-lg md:text-xl xl:text-2xl font-sans font-bold bg-gradient-to-r from-[#EA4335] via-[#4285F4] to-[#34A853] text-transparent bg-clip-text">
                Google Developer Groups on Campus पुणे
              </p>
              <p className="text-sm md:text-basic lg:text-lg xl:text-xl font-semibold flex justify-center mb-2">
                Presents
              </p>
            </motion.h2>
            <div className="flex flex-col justify-center items-center lg:gap-7 xl:gap-0 mt-2">
              <div className="flex justify-center items-center xl:justify-end relative h-[12vh] xl:h-[20vh]">
                {/* Main Image */}
                <motion.img
                  src={imageMap.WOW_Without_Circle.src}
                  alt={imageMap.WOW_Without_Circle.alt}
                  fetchPriority="high"
                  className="xl:w-[31vw] w-[80%]"
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
                    delay: 0.7
                  }}
                />

                {/* Overlay Circle (Properly Centered for XL Screens) */}
                <motion.img
                  src={imageMap.Circle.src}
                  alt={imageMap.Circle.alt}
                  fetchPriority="high"
                  className="w-[14%] xl:w-[18%] absolute top-[50.5%] left-[51.1%] xl:top-[50.8%] xl:left-[51.5%] transform -translate-x-1/2 -translate-y-1/2"
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
                    delay: 0.7
                  }}
                  whileInView={{
                    rotate: [0, 360],
                    transition: {
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear"
                    }
                  }}
                />
              </div>

              <motion.img
                src={doodle.Pune_Slogan.src}
                alt={doodle.Pune_Slogan.alt}
                fetchPriority="high"
                className="w-2/3 xl:w-[24vw]"
                initial={{ scale: 0, rotate: 10, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0, opacity: 1 }
                    : { scale: 0, rotate: 10, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.9
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-3 md:flex-col xl:flex-rows text-center xl:text-right md:p-5 xl:pt-0 md:pt-10 xl:p-0">
            <motion.div
              className="text-white text-center flex flex-row gap-3 xl:gap-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ delay: 1.1 }}
            >
              {countdownItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-xl overflow-clip w-17 xl:w-20 font-semibold "
                  style={{ border: `1px solid ${item.borderColor}` }}
                  variants={bounceVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  whileHover="hover"
                  transition={{ delay: isInView ? 1.1 + index * 0.1 : 0 }}
                >
                  <div
                    style={{ backgroundColor: item.headerBg }}
                    className="p-2 text-sm xl:text-basic items-center justify-center"
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ backgroundColor: item.contentBg }}
                    className="py-3 text-lg xl:text-2xl"
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            
              {/* Mobile: Button at top */}
              <div className="relative mb-3">
                <motion.div
                  ref={buttonRef}
                  className="mt-8"
                  initial={{ y: 100, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1.5
                  }}
                >
                  {/* The Konfhub script will render the button here */}
                </motion.div>

                {showTags && (
                  <AnimatePresence mode="wait">
                    {activeTag === "sold-out" && (
                      <motion.div
                        key="tag-red"
                        className="absolute text-center w-[90px] top-2 -left-6 xl:-left-5 text-[9px] font-bold px-2 py-1 rounded-md transform -rotate-10 z-10 bg-red-500 text-white shadow-2xl"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        Super Early Bird
                        <br />
                        Sold Out
                      </motion.div>
                    )}

                    {activeTag === "early-bird" && (
                      <motion.div
                        key="tag-green"
                        className="absolute w-[90px] text-center top-2 -left-6 xl:-left-5 text-[9px] font-bold px-2 py-1 rounded-md transform -rotate-10 z-10 bg-green-500 text-white shadow-2xl"
                        variants={tagVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        Early Bird
                        <br />
                        Coming Soon
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
              <div
              className="flex flex-col items-center 
  xl:flex-row xl:justify-center xl:items-center 
  gap-3 xl:gap-6"
            >
              {/* Date Section - First on mobile, middle on desktop */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                  delay: 1.8
                }}
                className="xl:order-1 flex items-center justify-center font-semibold text-center gap-2 text-black text-xs xl:text-sm"
              >
                <FaCalendarAlt className="text-green-400 size-7 xl:size-8 mb-1" />
                <span>
                  19th April : Speaker Session
                  <br />
                  20th April : Live Workshop &nbsp;&nbsp;
                </span>
                </motion.div>

              {/* Location Section - Last on mobile, last on desktop */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                  delay: 1.8
                }}
                className="xl:order-3 flex items-center  font-semibold text-start gap-1 text-black text-xs xl:text-sm"
              >
                <FaMapMarkerAlt className="text-red-500 size-7 xl:size-8" />
                <span>
                  MIT World Peace University,
                  <br />
                  Rambaug Colony, Kothrud, Pune.
                </span>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.img
          src={imageMap.Shaniwar_Wada.src}
          alt={imageMap.Shaniwar_Wada.alt}
          fetchPriority="high"
          className="w-[80%] max-w-md mt-5 mx-auto scale-110 md:scale-120 pb-7
  absolute bottom-0 left-1/2 transform -translate-x-1/2
  lg:scale-160 lg:bottom-[-5vh]
  xl:hidden z-[-10]"
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1.5 }
              : { y: 100, opacity: 0, scale: 0.9 }
          }
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8
          }}
        />
      </div>
    </div>
  );
}
