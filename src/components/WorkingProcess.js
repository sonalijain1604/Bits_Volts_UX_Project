import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState(0);

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description: 'Our team conducts thorough market research and develops a comprehensive strategy tailored to your business goals.'
    }
  ];

  return (
    <section className="py-16 bg-[#9EF01A]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-black text-sm mb-4">
            Our Working Process
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Step-by-Step Guide to Success
          </h2>
          <p className="text-black/80 mb-8">
            We follow a proven process to help your business achieve its digital marketing goals
          </p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`rounded-2xl ${
                openStep === index ? 'bg-[#9EF01A]' : 'bg-white'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenStep(openStep === index ? -1 : index)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium">{step.number}</span>
                  <span className="text-xl font-medium">{step.title}</span>
                </div>
                <span className="text-2xl">
                  {openStep === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-black/80 pl-10">{step.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess; 