import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">About Bits&Volt</h1>
            <p className="text-xl text-gray-600">
              Learn more about our company, mission, and values.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4 text-gray-700">
                  Founded in 2020, Bits&Volt was born from the vision to create innovative technology solutions that enhance people's lives while being environmentally conscious.
                </p>
                <p className="mb-4 text-gray-700">
                  Our team of passionate engineers, designers, and problem-solvers work together to develop products that combine cutting-edge technology with thoughtful design.
                </p>
                <p className="text-gray-700">
                  What started as a small startup has grown into a company recognized for its commitment to quality, innovation, and sustainability.
                </p>
              </div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-xl text-gray-500">Company Image Placeholder</span>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Bits&Volt, our mission is to create innovative, sustainable technology solutions that improve people's lives and contribute to a better future.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg italic text-blue-800">
                "We believe that the best technology not only solves problems but does so in a way that's responsible, accessible, and forward-thinking."
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push boundaries and explore new ideas to create solutions that make a difference.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We design with the environment in mind, creating products that minimize ecological impact.
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-medium mb-3">Quality</h3>
                <p className="text-gray-700">
                  We hold ourselves to the highest standards, ensuring our products are reliable and built to last.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 bg-gray-300 w-40 h-40 mx-auto rounded-full flex items-center justify-center">
                    <span className="text-gray-500">Photo</span>
                  </div>
                  <h3 className="text-lg font-medium">Team Member {index}</h3>
                  <p className="text-gray-600">Position Title</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 