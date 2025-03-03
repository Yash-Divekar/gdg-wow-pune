import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Home() {
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
      animate: { y: 0, x: 0, rotate: 45, opacity: 1 },
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
      className="relative h-screen w-full flex xl:flex-row flex-col overflow-hidden"
    >
      <motion.img
        src="/Grids/grid lines.png"
        alt=""
        className="absolute -z-10 h-screen w-screen"
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
      <motion.img
        src="/Shaniwar_Wada_With_bg.png"
        alt=""
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

      {[1, 2, 3, 4, 5, 6].map((index) => (
        <motion.img
          key={index}
          src={`/Doddles/image_${index}.png`}
          alt=""
          className={`absolute hidden xl:block ${
            index === 1
              ? "w-32 top-[15vh] left-[0.5vw]"
              : index === 2
              ? "w-32 top-[15vh] left-[8vw]"
              : index === 3
              ? "w-28 top-[27vh] -left-[2vw]"
              : index === 4
              ? "w-40 top-[40vh] left-[15vw]"
              : index === 5
              ? "w-20 top-[42vh] left-[7vw]"
              : "w-20 top-[43vh] left-[1vw]"
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
                duration: 2
              }
            }
          }}
        />
      ))}
      <motion.img
        src={`./Logo/Angle_Logo.svg`}
        alt=""
        className="absolute -top-30 -left-10 scale-[20%] hidden xl:block"
        initial={toddleAnimations[3].initial}
        animate={
          isInView ? toddleAnimations[3].animate : toddleAnimations[3].initial
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

      <div className="flex flex-col md:flex-row xl:flex-col justify-center items-center text-black xl:ml-auto xl:text-right xl:mr-[5vw] pt-[10vh] xl:pt-[15vh] gap-2 xl:items-end">
        <div className="flex justify-center xl:justify-end items-center xl:items-end flex-col md:flex-col xl:flex-rows text-center xl:text-right md:pt-10 lg:pt-0">
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
          <h4 className="text-basic sm:text-lg md:text-xl xl:text-2xl font-sans font-bold bg-gradient-to-r from-[#EA4335] via-[#4285F4] to-[#34A853] text-transparent bg-clip-text">
            Google Developer Groups on Campus पुणे
          </h4>
          <p className="text-sm md:text-basic lg:text-lg xl:text-xl flex justify-center xl:justify-end">
            Presents
          </p>
        </motion.h2>

        <div className="flex justify-center items-center xl:justify-end relative">
          {/* Main Image */}
          <motion.img
            src="./Logo/Wow_without_circle.svg"
            alt="WOW Logo"
            className="xl:w-[30vw] w-[80%]"
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
            src="./Logo/Circle.svg"
            alt="Rotating Circle"
            className="w-[12%] xl:w-[15%] m-[0.5%] xl:m-[0.6%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
              transition: { repeat:Infinity ,duration: 5, ease: "linear" }
            }}
          />
        </div>

        <motion.img
          src="/pune_slogan.png"
          alt=""
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
        <div className="flex justify-center items-center flex-col md:flex-col xl:flex-rows text-center xl:text-right md:p-5 xl:p-0">
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

        <motion.button
          className="bg-gradient-to-r from-[#4285F4] to-[#79ACFF] px-10 py-2 text-white text-lg font-bold rounded-full my-8"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          whileHover={{
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 1.5
          }}
        >
          Register now
        </motion.button>
        </div>
      </div>
      <motion.img
  src="/shaniwar-wada.svg"
  alt=""
  className="w-[80%] max-w-md mt-5 mx-auto 
  md:scale-120 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-z-10
  lg:scale-160 lg:bottom-[-5vh]
  xl:hidden"
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
  );
}
