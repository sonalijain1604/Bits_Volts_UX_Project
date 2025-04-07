import React from 'react';

const StyleGuide = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Typography Section */}
      <div className="mb-16">
        {/* Desktop Typography */}
        <div className="mb-12">
          <div className="inline-block bg-primary px-3 py-1 mb-2 rounded">
            <span className="text-dark font-bold">Typography</span>
          </div>
          <h2 className="text-white mb-8">Desktop</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-primary w-16">H1</span>
              <span className="text-6xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H2</span>
              <span className="text-5xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H3</span>
              <span className="text-4xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H4</span>
              <span className="text-2xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">p</span>
              <span className="text-base">Positivus</span>
            </div>
          </div>
        </div>

        {/* Mobile Typography */}
        <div>
          <div className="inline-block bg-primary px-3 py-1 mb-2 rounded">
            <span className="text-dark font-bold">Typography</span>
          </div>
          <h2 className="text-white mb-8">Mobile</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-primary w-16">H1</span>
              <span className="text-5xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H2</span>
              <span className="text-4xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H3</span>
              <span className="text-3xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">H4</span>
              <span className="text-xl font-bold">Positivus</span>
            </div>
            <div className="flex items-center">
              <span className="text-primary w-16">p</span>
              <span className="text-sm">Positivus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="mb-16">
        <div className="inline-block bg-primary px-3 py-1 mb-8 rounded">
          <span className="text-dark font-bold">Colors</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="h-40 bg-primary flex items-center justify-center">
              <span className="text-dark text-xl font-bold">B9FF66</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-40 bg-dark flex items-center justify-center border border-gray-700">
              <span className="text-white text-xl font-bold">191A23</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-40 bg-light-gray flex items-center justify-center">
              <span className="text-dark text-xl font-bold">F3F3F3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrations Section */}
      <div>
        <div className="inline-block bg-primary px-3 py-1 mb-8 rounded">
          <span className="text-dark font-bold">Illustrations</span>
        </div>
        
        <div className="space-y-4">
          <div className="bg-dark inline-block px-6 py-3 rounded-full">
            <span className="text-white">Illustrations by Igor Kapustin</span>
          </div>
          <div className="bg-dark inline-block px-6 py-3 rounded-full">
            <span className="text-white">Image by vectorjuice on Freepik</span>
          </div>
        </div>

        <a 
          href="https://www.fontshare.com/fonts/positivus" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-12 bg-dark inline-flex px-6 py-3 rounded-full text-white"
        >
          You can find font here
        </a>
      </div>
    </div>
  );
};

export default StyleGuide; 