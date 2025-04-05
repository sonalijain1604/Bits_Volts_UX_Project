import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Smart Energy Monitor',
      description: 'Monitor and optimize your home energy usage with our intuitive smart device.',
      features: ['Real-time energy tracking', 'AI-powered recommendations', 'Mobile app integration', 'Energy saving predictions'],
      image: 'product-placeholder.jpg'
    },
    {
      id: 2,
      name: 'Eco-Friendly Smart Bulb',
      description: 'Energy-efficient smart lighting solution with customizable settings and long lifespan.',
      features: ['Voice control compatible', '16 million colors', 'Schedule & automation', 'Ultra low energy consumption'],
      image: 'product-placeholder.jpg'
    },
    {
      id: 3,
      name: 'Solar Power Bank',
      description: 'Sustainable power on the go with dual charging capabilities - solar and USB.',
      features: ['Solar charging', 'High-capacity battery', 'Multiple device charging', 'Compact & durable design'],
      image: 'product-placeholder.jpg'
    },
    {
      id: 4,
      name: 'Smart Water Conservation System',
      description: 'Reduce water waste with our intelligent monitoring and control system.',
      features: ['Leak detection', 'Usage analytics', 'Automated shut-off', 'Mobile alerts & controls'],
      image: 'product-placeholder.jpg'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our innovative and sustainable technology solutions designed to improve everyday life while minimizing environmental impact.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="bg-gray-300 h-64 flex items-center justify-center">
                    <span className="text-xl text-gray-600">Product Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-700 mb-1">{feature}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
                        Learn More
                      </button>
                      <span className="text-gray-500 text-sm">Starting from $199</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Quality Assured</h3>
                <p className="text-gray-600">
                  All our products undergo rigorous testing to ensure they meet the highest standards of quality and durability.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Our products are designed with sustainability in mind, from materials to manufacturing processes.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Innovative Design</h3>
                <p className="text-gray-600">
                  We blend cutting-edge technology with intuitive design to create products that are both powerful and easy to use.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
              <p className="text-xl text-gray-700">
                Join thousands of satisfied customers who have transformed their lives with our smart, sustainable products.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 mr-4">
                Shop Now
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-blue-50 transition duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 