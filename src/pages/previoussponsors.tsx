import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
}

type SponsorType = '2023' | '2024';

type Sponsors = {
  [K in SponsorType]: Sponsor[];
};

type TierConfig = {
  [K in SponsorType]: {
    bgColor: string;
    textColor: string;
    title: string;
  };
};

const SponsorsGrid: React.FC = () => {
  const sponsors: Sponsors = {
    2023: [
    {"name": "Airmeet", "logo": "2023_Sponcers/Airmeet.png", "website": "https://www.airmeet.com/"},
    {"name": "Algozenith", "logo": "2023_Sponcers/Algozenith.jpeg", "website": "https://maang.in/"},
    {"name": "Developer Circles", "logo": "2023_Sponcers/developercircle.png", "website": "https://developers.facebook.com/developercircles/"},
    {"name": "Devfolio", "logo": "2023_Sponcers/Devfolio.png", "website": "https://devfolio.co/"},
    {"name": "DigitalOcean", "logo": "2023_Sponcers/Digital Ocean.png", "website": "https://www.digitalocean.com"},
    {"name": "echoAR", "logo": "2023_Sponcers/echoAR.png", "website": "https://www.echoar.xyz/"},
    {"name": "Egghead", "logo": "2023_Sponcers/egghead.png", "website": "https://egghead.io/"},
    {"name": "GeeksforGeeks", "logo": "2023_Sponcers/GeeksforGeeks-1024x576.png", "website": "https://www.geeksforgeeks.org/"},
    {"name": "Give My Certificate", "logo": "2023_Sponcers/givemycertificate.png", "website": "https://givemycertificate.com/"},
    {"name": "Google Developers", "logo": "2023_Sponcers/google developers.png", "website": "https://developers.google.com/"},
    {"name": "Hattsoff", "logo": "2023_Sponcers/hattsoff.png", "website": "https://www.hattsoff.com/"},
    {"name": "Floxus", "logo": "2023_Sponcers/images.jpeg", "website": "https://www.floxus.co/"},
    {"name": "JetBrains", "logo": "2023_Sponcers/jetbrains.jpeg", "website": "https://www.jetbrains.com/"},
    {"name": "Jovian", "logo": "2023_Sponcers/jovian.ml", "website": "https://www.jovian.com/"},
    {"name": "Manning Publications", "logo": "2023_Sponcers/manningpublications.png", "website": "https://www.manning.com/"},
    {"name": "Matic Network", "logo": "2023_Sponcers/matic-network4262.jpg", "website": "https://polygon.technology/"},
    {"name": "Mentro", "logo": "2023_Sponcers/mentro_official_logo.jpeg", "website": "https://www.mentro.tech/"},
    {"name": "Portis", "logo": "2023_Sponcers/portis-blockchain-wallet8295.logowik.com.webp", "website": "https://www.portis.io/"},
    {"name": "Progate", "logo": "2023_Sponcers/progate.png", "website": "https://progate.com/"},
    {"name": "Scaler Edge", "logo": "2023_Sponcers/scaler-edge-logo.png", "website": "https://www.scaler.com/"},
    {"name": "Sketch", "logo": "2023_Sponcers/sketch.png", "website": "https://www.sketch.com/"},
    {"name": "StreamYard", "logo": "2023_Sponcers/streamyard.png", "website": "https://streamyard.com/"},
    {"name": "Strikingly", "logo": "2023_Sponcers/stringly.png", "website": "https://www.strikingly.com/"},
    {"name": "Taskade", "logo": "2023_Sponcers/taskade.png", "website": "https://www.taskade.com/"},
    {"name": "Tezos", "logo": "2023_Sponcers/Tezos.jpeg", "website": "https://tezos.com/"},
    {"name": "Virtual Cyber Labs", "logo": "2023_Sponcers/virtual_cyber_labs_logo.jpeg", "website": "https://www.virtualcyberlabs.com/"},
    {"name": "Voiceflow", "logo": "2023_Sponcers/voiceflow.png", "website": "https://www.voiceflow.com/"},
    {"name": "Zulip", "logo": "2023_Sponcers/zulip.png", "website": "https://zulip.com/"}
  ],
   2024: [
    {"name": "Airmeet", "logo": "2024_Sponcers/Airmeet.png", "website": "https://www.airmeet.com/"},
    {"name": "Build Tribe", "logo": "2024_Sponcers/build tribe.webp", "website": "https://www.buildtribe.com/"},
    {"name": "Developer Circles", "logo": "2024_Sponcers/developercircle.png", "website": "https://developers.facebook.com/developercircles/"},
    {"name": "Devfolio", "logo": "2024_Sponcers/Devfolio.png", "website": "https://devfolio.co/"},
    {"name": "DigitalOcean", "logo": "2024_Sponcers/DigitalOcean.png", "website": "https://www.digitalocean.com/"},
    {"name": "Egghead", "logo": "2024_Sponcers/egghead.io.avif", "website": "https://egghead.io/"},
    {"name": "Fitbit", "logo": "2024_Sponcers/Fitbit-Logo.webp", "website": "https://www.fitbit.com/"},
    {"name": "FlutterFlow", "logo": "2024_Sponcers/flutterflow.png", "website": "https://flutterflow.io/"},
    {"name": "GeeksforGeeks", "logo": "2024_Sponcers/GeeksforGeeks-1024x576.png", "website": "https://www.geeksforgeeks.org/"},
    {"name": "Google Developers", "logo": "2024_Sponcers/google developers.png", "website": "https://developers.google.com/"},
    {"name": "JetBrains", "logo": "2024_Sponcers/jetbrains-logo.png", "website": "https://www.jetbrains.com/"},
    {"name": "Jovian", "logo": "2024_Sponcers/jovian.ml", "website": "https://www.jovian.com/"},
    {"name": "KonfHub", "logo": "2024_Sponcers/konfhub.jpeg", "website": "https://konfhub.com/"},
    //{"name": "KonfHub", "logo": "2024_Sponcers/konfhub.png", "website": "https://konfhub.com/"},
    {"name": "Languify", "logo": "2024_Sponcers/languify.png", "website": "https://www.languify.in/"},
    {"name": "Manning Publications", "logo": "2024_Sponcers/manning.png", "website": "https://www.manning.com/"},
    {"name": "Matic Network", "logo": "2024_Sponcers/matic-network4262.jpg", "website": "https://polygon.technology/"},
    {"name": "Orkes", "logo": "2024_Sponcers/orkes.png", "website": "https://orkes.io/"},
    {"name": "Progate", "logo": "2024_Sponcers/progate.png", "website": "https://progate.com/"},
    {"name": "Scaler Edge", "logo": "2024_Sponcers/scaleredge.png", "website": "https://www.scaler.com/"},
    {"name": "Sketch", "logo": "2024_Sponcers/sketch.png", "website": "https://www.sketch.com/"},
    {"name": "StreamYard", "logo": "2024_Sponcers/streamyard.png", "website": "https://streamyard.com/"},
    {"name": "Strikingly", "logo": "2024_Sponcers/stringly.png", "website": "https://www.strikingly.com/"},
    {"name": "Taskade", "logo": "2024_Sponcers/taskade.png", "website": "https://www.taskade.com/"},
    //{"name": "Tezos", "logo": "2024_Sponcers/Tezos.jpeg", "website": "https://tezos.com/"},
    {"name": "Tezos", "logo": "2024_Sponcers/tezos.png", "website": "https://tezos.com/"},
    {"name": "Virtual Cyber Labs", "logo": "2024_Sponcers/virtualcyberlabs.jpeg", "website": "https://www.virtualcyberlabs.com/"},
    {"name": "Zulip", "logo": "2024_Sponcers/zulip.png", "website": "https://zulip.com/"}
  ]
  };

  const tierConfig: TierConfig = {
    2023: { bgColor: 'bg-blue-50', textColor: 'text-blue-700', title: '2023' },
    2024: { bgColor: 'bg-red-50', textColor: 'text-red-700', title: '2024' }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
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

      {(Object.entries(sponsors) as [SponsorType, Sponsor[]][]).map(([tier, companies]) => (
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
            <CardContent className="p-6">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                variants={containerVariants}
              >
                {companies.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center"
                  >
                    <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                      <div className="bg-white rounded-lg p-3 h-full shadow-sm hover:shadow">
                        {/* 4:3 Aspect Ratio Wrapper with White Background */}
                        <div className="w-[160px] h-[120px] bg-white flex justify-center items-center rounded-lg overflow-hidden border border-gray-200 p-3">
                          <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <p className="text-sm font-medium text-gray-700 truncate">
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
