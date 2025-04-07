import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Amazon',
    url: '/images/logos/amazon.svg',
    width: 'w-24'
  },
  {
    name: 'Dribbble',
    url: '/images/logos/dribbble.svg',
    width: 'w-20'
  },
  {
    name: 'HubSpot',
    url: '/images/logos/hubspot.svg',
    width: 'w-24'
  },
  {
    name: 'Notion',
    url: '/images/logos/notion.svg',
    width: 'w-20'
  },
  {
    name: 'Netflix',
    url: '/images/logos/netflix.svg',
    width: 'w-24'
  },
  {
    name: 'Zoom',
    url: '/images/logos/zoom.svg',
    width: 'w-20'
  }
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              className={`${logo.width} grayscale hover:grayscale-0 transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy; 