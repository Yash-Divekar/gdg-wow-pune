import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
}

type SponsorTier = 'platinum';

type Sponsors = {
  [K in SponsorTier]: Sponsor[];
}

type TierConfig = {
  [K in SponsorTier]: {
    bgColor: string;
    textColor: string;
    title: string;
  };
}

const SponsorsGrid: React.FC = () => {
  const sponsors: Sponsors = {
    platinum: [
      {"name": "Devfolio", "logo": "sponcers/Devfolio.png", "website": "https://devfolio.com"},
      {"name": "Agprop", "logo": "sponcers/agprop.png", "website": "https://example.com"},
      {"name": "Airmeet", "logo": "sponcers/Airmeet.png", "website": "https://www.airmeet.com"},
      {"name": "AlgoZenith", "logo": "sponcers/AlgoZenith.png", "website": "https://AlgoZenith.com"},
      {"name": "Geeks For Geeks", "logo": "sponcers/Geeks for Geeks.png", "website": "https://tezos.com"},
      {"name": "DigitalOcean", "logo": "sponcers/DigitalOcean.png", "website": "https://www.digitalocean.com"},
      {"name": "Google For Developers", "logo": "sponcers/Google For Developers.png", "website": "https://developers.google.com"},
      {"name": "FlutterFlow", "logo": "sponcers/Flutter Flow.png", "website": "https://flutterflow.io"},
      {"name": "JetBrains", "logo": "sponcers/JetBrains.png", "website": "https://www.jetbrains.com"},
      {"name": "Zulip", "logo": "sponcers/Zulip.png", "website": "https://zulip.com"},
      {"name": "Scaler", "logo": "sponcers/Scaler Edge.png", "website": "https://www.scaler.com"},
      {"name": "Sketch Edge", "logo": "sponcers/Sketch.png", "website": "https://www.sketch.com"}
    
    ],
    /*gold: [
      { name: 'Digital Solutions', logo: '/api/placeholder/100/50', website: 'https://example.com' },
      { name: 'Future Systems', logo: '/api/placeholder/100/50', website: 'https://example.com' },
      { name: 'Cloud Services', logo: '/api/placeholder/100/50', website: 'https://example.com' }
    ],
    silver: [
      { name: 'Dev Tools Inc', logo: '/api/placeholder/80/40', website: 'https://example.com' },
      { name: 'Code Masters', logo: '/api/placeholder/80/40', website: 'https://example.com' },
      { name: 'Web Wizards', logo: '/api/placeholder/80/40', website: 'https://example.com' },
      { name: 'App Builders', logo: '/api/placeholder/80/40', website: 'https://example.com' }
    ]*/
  };

  // Rest of the component remains the same...

  const tierConfig: TierConfig = {
    platinum: {
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      title: 'Platinum'
    },
    /*gold: {
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      title: 'Gold'
    },
    silver: {
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      title: 'Silver'
    }*/
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-500 text-transparent bg-clip-text">
          Our Sponsors
        </h2>
      </motion.div>
      
      {(Object.entries(sponsors) as [SponsorTier, Sponsor[]][]).map(([tier, companies]) => (
        <motion.div 
          key={tier}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-2"
        >
          <h3 className={`text-xl font-semibold ${tierConfig[tier].textColor} ml-2`}>
            {tierConfig[tier].title}
          </h3>
          
          <Card className={`${tierConfig[tier].bgColor} shadow-sm`}>
            <CardContent className="p-4">
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                variants={containerVariants}
              >
                {companies.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-white rounded-lg p-3 h-full shadow-sm hover:shadow">
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <p className="text-sm text-gray-700 truncate">
                            {sponsor.name}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SponsorsGrid;