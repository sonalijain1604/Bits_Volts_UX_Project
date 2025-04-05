import React from 'react';

const Hero = () => {
  return (
    <section className="bg-dark pt-10 pb-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-primary font-bold mb-6 leading-tight">
              Navigating the digital landscape for success
            </h1>
            <p className="text-white text-lg mb-8 max-w-xl">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-dark font-bold py-3 px-6 rounded hover:bg-opacity-90 transition duration-300">
                Book a consultation
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main hero illustration */}
              <div className="w-full h-80 md:h-96 relative">
                {/* This would be the main illustration from Figma */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* We would include the actual SVG from the Figma design here */}
                    {/* This is a placeholder circle */}
                    <circle cx="200" cy="200" r="150" fill="#B9FF66" fillOpacity="0.2" />
                    <path d="M200 100C144.772 100 100 144.772 100 200C100 255.228 144.772 300 200 300C255.228 300 300 255.228 300 200C300 144.772 255.228 100 200 100ZM200 280C155.888 280 120 244.112 120 200C120 155.888 155.888 120 200 120C244.112 120 280 155.888 280 200C280 244.112 244.112 280 200 280Z" fill="#B9FF66" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg text-white">
                    Hero Illustration
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-primary rounded-full opacity-70" style={{ transform: 'translateX(-50%) translateY(-50%)' }}></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary rounded-full opacity-60" style={{ transform: 'translateX(30%) translateY(30%)' }}></div>
              <div className="absolute top-1/2 right-0 w-8 h-8 bg-white rounded-full opacity-50" style={{ transform: 'translateX(50%) translateY(-50%)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 