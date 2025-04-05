import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their digital marketing efforts. Their team is professional, responsive, and truly cares about the success of our business.",
      author: "John Smith",
      position: "CEO, TechLink Solutions"
    },
    {
      id: 2,
      text: "The team at Positivus has been instrumental in helping us establish a strong online presence. Their SEO and PPC strategies have driven quality traffic to our website, resulting in a 40% increase in online sales. We highly recommend their services.",
      author: "Sarah Johnson",
      position: "Marketing Director, Retail Innovations"
    },
    {
      id: 3,
      text: "Since partnering with Positivus, our social media engagement has increased dramatically. They have helped us create compelling content that resonates with our audience and drives meaningful interactions. They are a pleasure to work with!",
      author: "Michael Chen",
      position: "Social Media Manager, StyleHouse"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-dark" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-3xl font-bold mb-12">Testimonials</h2>

        <div className="bg-dark rounded-lg p-1">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 p-6 md:p-10"
                  >
                    <div className="bg-dark border border-gray-800 rounded-lg p-6 md:p-8">
                      <p className="text-white text-lg mb-6">"{testimonial.text}"</p>
                      <div>
                        <div className="text-white font-bold">{testimonial.author}</div>
                        <div className="text-gray-400">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-600'
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="bg-dark border border-gray-700 hover:border-primary rounded-full p-2 text-white transition-colors duration-300"
                  onClick={prevSlide}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="bg-dark border border-gray-700 hover:border-primary rounded-full p-2 text-white transition-colors duration-300"
                  onClick={nextSlide}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 