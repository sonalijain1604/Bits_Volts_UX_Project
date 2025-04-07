import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-positivus font-bold">◼ Positivus</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about-us" className="text-secondary hover:text-primary transition-colors">About us</Link>
            <Link to="/services" className="text-secondary hover:text-primary transition-colors">Services</Link>
            <Link to="/use-cases" className="text-secondary hover:text-primary transition-colors">Use Cases</Link>
            <Link to="/pricing" className="text-secondary hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link>
            <Link to="/request-quote" className="border border-secondary rounded-full px-6 py-2 hover:bg-primary hover:border-primary transition-all">
              Request a quote
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/about-us" className="text-secondary hover:text-primary transition-colors">About us</Link>
              <Link to="/services" className="text-secondary hover:text-primary transition-colors">Services</Link>
              <Link to="/use-cases" className="text-secondary hover:text-primary transition-colors">Use Cases</Link>
              <Link to="/pricing" className="text-secondary hover:text-primary transition-colors">Pricing</Link>
              <Link to="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link>
              <Link to="/request-quote" className="border border-secondary rounded-full px-6 py-2 text-center hover:bg-primary hover:border-primary transition-all">
                Request a quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 