import React from 'react';
import { Link } from 'react-router-dom';
import Megaphone from './Illustration/Megaphone';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-h1 font-positivus font-bold mb-6">
              Navigating the digital landscape for success
            </h1>
            <p className="text-body text-gray-600 mb-8">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Book a consultation
            </Link>
          </div>
          
          <div className="relative">
            <Megaphone />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 