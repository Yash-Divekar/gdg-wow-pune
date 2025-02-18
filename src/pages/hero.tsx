import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-03-15T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 backdrop-blur-md 
                       rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 
                       border border-white/10 hover:border-white/20 transition-all duration-300
                       hover:shadow-xl relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.span
              key={unit.value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl font-bold text-white mb-2 relative z-10"
            >
              {String(unit.value).padStart(2, '0')}
            </motion.span>
            
            <span className="text-white/80 text-sm uppercase tracking-wider font-medium relative z-10">
              {unit.label}
            </span>
            
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export function HeroDemo() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 py-20">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl md:text-5xl text-black text-center mb-2"
        >
          Google Developer Students Club Presents
        </motion.h1>
        
        
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <img 
            className="h-[200px] w-[800px] object-contain" 
            src="./graphic.png" 
            alt="GDSC Graphic" 
          />
        </motion.div>

        <CountdownTimer />
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-700 text-white px-6 py-3 rounded"
          >
            Registration Starting Soon
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroDemo;

