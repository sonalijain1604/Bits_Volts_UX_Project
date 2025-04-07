import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Search engine optimization',
      description: 'Improve your website\'s visibility and drive organic traffic through effective SEO strategies.',
      icon: '/icons/search.svg',
      path: '/services/seo'
    },
    {
      title: 'Pay-per-click advertising',
      description: 'Drive targeted traffic and increase conversions with strategic PPC campaigns.',
      icon: '/icons/ppc.svg',
      path: '/services/ppc'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary rounded-lg text-secondary font-medium mb-4">
              Services
            </span>
            <p className="text-gray-600 max-w-3xl">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-tertiary rounded-2xl p-8 group hover:bg-primary transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-secondary">{service.description}</p>
                </div>
                <img src={service.icon} alt="" className="w-12 h-12" />
              </div>
              <Link
                to={service.path}
                className="inline-flex items-center text-secondary font-medium group-hover:text-secondary"
              >
                Learn more
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 