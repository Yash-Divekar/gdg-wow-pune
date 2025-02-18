import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mic, ArrowRight, Star } from 'lucide-react';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          background: i % 2 ? '#4285F4' : '#DB4437',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          filter: 'blur(1px)',
        }}
        animate={{
          y: [-20, -120],
          x: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
          scale: [0, 2, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const GoogleCallToSpeakers = () => {
  const [isHovered, setIsHovered] = useState(false);

  const googleColors = {
    blue: '#4285F4',
    red: '#DB4437',
    yellow: '#F4B400',
    green: '#0F9D58'
  };

  return (
    <div className="w-full min-h-screen overflow-hidden relative py-16">
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Enhanced Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          {/* Animated background rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-10"
                style={{ 
                  width: `${400 + i * 100}px`,
                  height: `${400 + i * 100}px`,
                  border: `2px solid ${Object.values(googleColors)[i % 4]}`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Animated icon */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative inline-block mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative"
            >
              <Sparkles className="w-16 h-16" style={{ color: googleColors.yellow }} />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 w-16 h-16 bg-yellow-200 rounded-full filter blur-2xl opacity-60"
              />
            </motion.div>
          </motion.div>
          
          {/* Title with enhanced effects */}
          <div className="relative mb-8">
            <motion.h1 
              className="text-7xl font-bold relative z-10"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Call for Speakers
              </span>
            </motion.h1>
            
            {/* Floating decorative elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-20, 20],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Star className="w-4 h-4 text-yellow-400" />
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Join the
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mx-2">
              WoW
            </span>
            Revolution
          </motion.p>
        </motion.div>

        {/* Ultra Modern CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="relative max-w-4xl mx-auto"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Glowing background effects */}
          <motion.div 
            className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl"
            animate={{
              opacity: isHovered ? 0.7 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
          />

          <motion.div
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-12 overflow-hidden border border-white/20"
          >
            {/* Animated background patterns */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, ${googleColors.blue} 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="inline-block"
                animate={{
                  y: [-10, 10],
                  rotate: [-5, 5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative group">
                  <div className="p-6 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-100 rounded-xl transform transition-all duration-300 group-hover:rotate-6">
                    <Mic className="w-12 h-12" style={{ color: googleColors.yellow }} />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-xl blur-xl opacity-20"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.h2 
                className="text-5xl font-bold mt-8 mb-6"
                animate={{
                  opacity: isHovered ? 1 : 0.9,
                  scale: isHovered ? 1.05 : 1
                }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-transparent bg-clip-text">
                  Your Voice Matters
                </span>
              </motion.h2>

              <motion.p 
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                animate={{
                  opacity: isHovered ? 1 : 0.8
                }}
              >
                Share your extraordinary journey and inspire the next generation of innovators. 
                Your unique perspective could spark the next technological revolution.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-size-200"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center text-xl">
                  Proposal Submission Comming Soon
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleCallToSpeakers;