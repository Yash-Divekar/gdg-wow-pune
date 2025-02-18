import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BeautifiedFAQs = () => {
  // Google branding colors
  const colors = {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC05",
    green: "#34A853",
    white: "#FFFFFF",
    lightGray: "#F8F9FA",
    darkGray: "#202124"
  };

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "What is Google Developer Group Pune's WOW event?",
      answer:
        "The WOW event is a special conference organized by GDG Pune focused on innovation, technology, and fostering connections within the developer community. It brings together tech enthusiasts, industry experts, and beginners alike for learning and networking opportunities.",
      color: colors.blue,
      icon: "🎯"
    },
    {
      id: 2,
      question: "When and where will the WOW event take place?",
      answer:
        "The WOW event will be held at [Venue Name] in Pune on [Date]. The event will run from [Start Time] to [End Time]. We recommend arriving 30 minutes early for registration.",
      color: colors.red,
      icon: "📅"
    },
    {
      id: 3,
      question: "How can I register for the event?",
      answer:
        "Registration is simple! Visit our website at gdgpune.com/wow-event and click on the 'Register' button. Early bird tickets are available until [Date], so don't miss out on special pricing!",
      color: colors.yellow,
      icon: "✍️"
    },
    {
      id: 4,
      question: "What topics will be covered at the WOW event?",
      answer:
        "The WOW event will cover a diverse range of topics including AI/ML, Web Development, Cloud Computing, Mobile Development, and emerging technologies. Check our website for the detailed agenda and speaker profiles.",
      color: colors.green,
      icon: "🧠"
    },
    {
      id: 5,
      question: "Will there be networking opportunities?",
      answer:
        "Absolutely! We've dedicated specific sessions for networking. You'll have the chance to connect with industry professionals, fellow developers, and potential collaborators throughout the event.",
      color: colors.blue,
      icon: "🤝"
    }
  ];

  const [activeId, setActiveId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll visibility animation
    const handleScroll = () => {
      const section = document.getElementById('faq');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (id:any) => {
    setActiveId(activeId === id ? null : id);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="faq">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Animated Header with Google-inspired design */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex mb-3 items-center space-x-2">
            <motion.div 
              className="px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-blue-600 rounded-full"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              FAQs
            </motion.div>
            <motion.div
              className="flex space-x-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              {[colors.blue, colors.red, colors.yellow, colors.green].map((color, i) => (
                <motion.span 
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                />
              ))}
            </motion.div>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <motion.span 
              className="text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">t</span>
              <span className="text-blue-600"> </span>
              <span className="text-green-500">Q</span>
              <span className="text-red-500">u</span>
              <span className="text-yellow-500">e</span>
              <span className="text-blue-600">s</span>
              <span className="text-green-500">t</span>
              <span className="text-red-500">i</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-600">n</span>
              <span className="text-green-500">s</span>
              <span className="text-gray-900">?</span>
            </motion.span>
          </h2>
          
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Find answers to the most common questions about the GDG Pune WOW event
          </motion.p>
        </motion.div>

        {/* Main content grid with animated image and FAQs */}
        <div className=" gap-16 items-start">
          {/* Left side - Interactive Image with animations */}
          

          {/* Right side - Enhanced FAQs with animation */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="space-y-5">
              {faqs.map((faq) => (
                <motion.div 
                  key={faq.id} 
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      boxShadow: activeId === faq.id ? `0 10px 15px -3px ${faq.color}20, 0 4px 6px -2px ${faq.color}10` : "none",
                      borderLeft: activeId === faq.id ? `4px solid ${faq.color}` : "1px solid transparent",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-2xl"
                          animate={{ 
                            rotate: activeId === faq.id ? [0, 20, 0, -20, 0] : 0,
                            scale: activeId === faq.id ? [1, 1.2, 1] : 1
                          }}
                          transition={{ 
                            duration: 0.5,
                            repeat: activeId === faq.id ? 0 : 0
                          }}
                        >
                          {faq.icon}
                        </motion.span>
                        <span className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                          {faq.question}
                        </span>
                      </div>
                      
                      <motion.div
                        className="ml-4 flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: activeId === faq.id ? faq.color : 'transparent',
                        }}
                        animate={{ 
                          rotate: activeId === faq.id ? 180 : 0,
                          backgroundColor: activeId === faq.id ? faq.color : 'transparent',
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={activeId === faq.id ? 'white' : faq.color} 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <motion.div 
                              className="text-gray-600 pl-4 border-l-2 rounded py-2"
                              style={{ borderLeftColor: faq.color, backgroundColor: `${faq.color}10` }}
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {faq.answer}
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Decorative animated elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-16 h-16 bg-blue-400 rounded-full opacity-20 z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 10, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute top-1/4 -left-10 w-12 h-12 bg-red-400 rounded-full opacity-20 z-0"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, -5, 0],
                y: [0, 5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 -right-10 w-12 h-12 bg-green-400 rounded-full opacity-20 z-0"
              animate={{ 
                scale: [1, 1.1, 1],
                x: [0, 8, 0],
                y: [0, 8, 0]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced Call to action with animation */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-5 text-lg">Still have questions? We're here to help!</p>
          
          <motion.a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ 
                color: [colors.white, colors.lightGray, colors.white],
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 8px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Contact Us
            </motion.span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              animate={{ 
                x: [0, 5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </motion.svg>
          </motion.a>
          
          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {[colors.blue, colors.red, colors.yellow, colors.green].map((color, i) => (
              <motion.span 
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + (i * 0.1), duration: 0.3 }}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeautifiedFAQs;