import React, { useState, useEffect } from 'react';

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const googleColors = [
    { border: 'border-blue-500', text: 'text-blue-500', label: 'text-blue-600' },
    { border: 'border-red-500', text: 'text-red-500', label: 'text-red-600' },
    { border: 'border-yellow-500', text: 'text-yellow-500', label: 'text-yellow-600' },
    { border: 'border-green-500', text: 'text-green-500', label: 'text-green-600' }
  ];

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
    <div className="flex justify-center items-center gap-2 md:gap-4 p-4 w-full">
      <div className="flex flex-nowrap space-x-2 md:space-x-4">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="relative flex-shrink-0">
            <div className={`
              w-16 h-16 md:w-24 md:h-24 
              bg-white/80 backdrop-blur-sm
              rounded-2xl shadow-lg 
              flex flex-col items-center justify-center
              border-2 ${googleColors[index].border}
              transition-all duration-300 hover:scale-105
              hover:shadow-xl relative overflow-hidden
              hover:bg-white/95
            `}>
              <span className={`text-xl md:text-4xl font-bold ${googleColors[index].text} mb-1 transition-all duration-300`}>
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className={`${googleColors[index].label} text-xs uppercase tracking-wider font-medium`}>
                {unit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HeroDemo = () => {
  return (
    <div className="min-h-screen relative bg-gray-50 overflow-hidden">
      <div className="h-16" />
      
      {/* Updated background image positioning */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-3/4 opacity-30 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('./shaniwarwada.svg')" }} 
      />
      
      <div className="absolute top-16 left-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" />
      
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-8 px-4 space-y-8">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-2 p-1">
            Google Developer Groups पुणे
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            Presents
          </p>
        </div>
        
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-green-500/20 blur-xl" />
          <img className="h-[120px] md:h-[160px] w-full object-contain relative z-10" 
               src="./graphic.png" 
               alt="GDSC Graphic" />
        </div>

        <div className="relative w-full max-w-4xl">
          <img className="h-[120px] md:h-[160px] w-full object-contain relative z-10" 
               src="./Marathi_Text.png" 
               alt="Marathi Text" />
        </div>

        <CountdownTimer />
        
        <button className="
          bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 
          text-white px-6 py-3 rounded-full font-bold 
          text-base md:text-lg shadow-lg
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          active:scale-95
        ">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeroDemo;