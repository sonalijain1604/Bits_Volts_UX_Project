import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
    content: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
  },
  {
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
    content: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
  },
  {
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp',
    content: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-[#1D1D1D] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 bg-[#9EF01A] rounded-lg text-black text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Hear from Our Satisfied Clients: Read Our Testimonials
          </h2>
          <p className="text-gray-400">
            to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-[#292929] rounded-3xl p-8 mb-8">
            <p className="text-lg mb-8">
              {testimonials[currentIndex].content}
            </p>
            <div>
              <h4 className="font-medium text-[#9EF01A]">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-400">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? 'bg-[#9EF01A]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 