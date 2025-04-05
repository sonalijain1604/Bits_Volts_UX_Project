import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkingProcess from '../components/WorkingProcess';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkingProcess />
      <Testimonials />
    </div>
  );
};

export default Home; 