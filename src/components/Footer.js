import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {/* Top Section */}
          <div className="flex justify-between items-start flex-wrap gap-8">
            {/* Logo and Contact Info */}
            <div className="space-y-6">
              {/* Logo */}
              <Link to="/" className="inline-block">
                <h1 className="text-2xl font-bold">◈ Positivus</h1>
              </Link>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#9EF01A] rounded text-black text-sm">
                  Contact us:
                </div>
                <div className="space-y-2">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>Address: 1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8 flex-wrap">
              <Link to="/about" className="hover:text-[#9EF01A] transition-colors">
                About us
              </Link>
              <Link to="/services" className="hover:text-[#9EF01A] transition-colors">
                Services
              </Link>
              <Link to="/use-cases" className="hover:text-[#9EF01A] transition-colors">
                Use Cases
              </Link>
              <Link to="/pricing" className="hover:text-[#9EF01A] transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="hover:text-[#9EF01A] transition-colors">
                Blog
              </Link>
            </div>

            {/* Newsletter Form */}
            <div className="w-full md:w-auto">
              <form className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-[#292929] rounded-lg border border-gray-600 focus:outline-none focus:border-[#9EF01A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9EF01A] text-black rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">© 2023 Positivus. All Rights Reserved.</p>
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-[#9EF01A]">
              Privacy Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 absolute top-12 right-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EF01A]">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EF01A]">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EF01A]">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 