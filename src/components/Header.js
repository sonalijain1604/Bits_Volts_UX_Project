import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-dark py-4 md:py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl">Positivus</div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#" className="text-white hover:text-primary transition duration-300">About us</a></li>
            <li><a href="#" className="text-white hover:text-primary transition duration-300">Services</a></li>
            <li><a href="#" className="text-white hover:text-primary transition duration-300">Use Cases</a></li>
            <li><a href="#" className="text-white hover:text-primary transition duration-300">Pricing</a></li>
            <li><a href="#" className="text-white hover:text-primary transition duration-300">Blog</a></li>
          </ul>
        </nav>
        
        <button className="hidden md:block bg-primary text-dark font-bold py-2 px-6 rounded hover:bg-opacity-90 transition duration-300">
          Request a quote
        </button>
        
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-dark md:hidden z-10 p-4 border-t border-gray-800">
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-primary transition duration-300 block py-2">About us</a></li>
              <li><a href="#" className="text-white hover:text-primary transition duration-300 block py-2">Services</a></li>
              <li><a href="#" className="text-white hover:text-primary transition duration-300 block py-2">Use Cases</a></li>
              <li><a href="#" className="text-white hover:text-primary transition duration-300 block py-2">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-primary transition duration-300 block py-2">Blog</a></li>
              <li>
                <button className="w-full bg-primary text-dark font-bold py-2 px-6 rounded hover:bg-opacity-90 transition duration-300 mt-4">
                  Request a quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 