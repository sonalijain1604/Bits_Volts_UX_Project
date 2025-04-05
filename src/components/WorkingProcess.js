import React, { useState } from 'react';

const WorkingProcess = () => {
  const [expandedStep, setExpandedStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'During our first meeting, we\'ll discuss your business goals and objectives, target audience, and current marketing efforts to determine the best approach for your digital strategy.',
    },
    {
      id: 2,
      title: 'Research and Strategy Development',
      description: 'Our team conducts thorough research on your industry, competitors, and target audience to develop a customized digital marketing strategy that aligns with your business goals.',
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'Once the strategy is approved, we begin implementing the various components of your digital marketing plan, from website optimization to content creation and campaign setup.',
    },
    {
      id: 4,
      title: 'Monitoring and Optimization',
      description: 'We continuously monitor the performance of your campaigns and make data-driven adjustments to optimize results and maximize your return on investment.',
    },
    {
      id: 5,
      title: 'Reporting and Communication',
      description: 'Regular reports keep you informed about the performance of your digital marketing efforts, and ongoing communication ensures that we can adapt the strategy as needed.',
    }
  ];

  const toggleStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <section className="py-16 bg-dark" id="process">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-3xl font-bold mb-4">Our Working Process</h2>
          <p className="text-white text-lg max-w-2xl">
            Our approach is methodical and tailored to each client's unique needs, ensuring the best possible results for your business.
          </p>
        </div>
        
        <div className="bg-primary rounded-lg p-6 md:p-8">
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-lg overflow-hidden">
                <button 
                  className={`w-full text-left py-4 px-6 flex items-center justify-between font-bold ${
                    expandedStep === step.id ? 'bg-dark text-white' : 'bg-white text-dark'
                  }`}
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-center">
                    <span className="bg-primary text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                      {step.id < 10 ? `0${step.id}` : step.id}
                    </span>
                    {step.title}
                  </div>
                  <svg 
                    className={`w-6 h-6 transform transition-transform ${
                      expandedStep === step.id ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedStep === step.id && (
                  <div className="py-4 px-6 bg-white text-dark">
                    <p>{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess; 