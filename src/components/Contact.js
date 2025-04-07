import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary px-4 py-1 rounded">
            <span className="text-dark font-bold">Contact Us</span>
          </div>
          
          <p className="text-dark my-4">
            Have questions about our services or want to start a project? Fill out the form below and we'll get back to you shortly.
          </p>
          
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-dark font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="block text-dark font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div className="mb-6 text-left">
                <label htmlFor="company" className="block text-dark font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-6 text-left">
                <label htmlFor="subject" className="block text-dark font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="mb-6 text-left">
                <label htmlFor="message" className="block text-dark font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="bg-dark text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 