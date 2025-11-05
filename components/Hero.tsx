import React, { useState } from 'react';
import { LinkedinIcon, PhoneIcon, MailIcon } from './Icons';
import ResumeModal from './ResumeModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = 'https://docs.google.com/document/d/1K-S71UeCFjdHA6w2Tny8IRT14iElNqOTEmVh_dQbxNo/preview';

  const profileImageBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIbGNtcwIQAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGVAAAAABzYXdzY3RybAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWhhbmRyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAAAMsAAAA/GN1cnYAAAAAAAAEAAAA8GdesgMAAAAAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMA-QMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMAAQMA..."

  
  return (
    <>
      <section id="hero" className="py-24 md:py-32 bg-gradient-to-br from-cyan-50 to-emerald-100/30">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img 
                src={profileImageBase64}
                alt="Boniface Thuo Mwaura" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-emerald-50" 
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-navy mb-4 leading-tight">
              Boniface Thuo Mwaura
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold font-heading text-teal mb-6">
              Data Science and Engineering Professional
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto md:mx-0">
              Based in Nairobi, Kenya. I am a Data Science and Engineering professional specializing in machine learning, data systems architecture, and predictive analytics to drive data-informed decisions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto bg-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-lg transform hover:scale-105">
                View Resume
              </button>
              <a href="#contact" className="w-full md:w-auto bg-navy text-white font-bold py-3 px-8 rounded-lg hover:bg-navy/90 transition-all duration-300 shadow-lg transform hover:scale-105">
                Get In Touch
              </a>
            </div>
             <div className="mt-8 flex justify-center md:justify-start items-center space-x-6">
              <a href="https://www.linkedin.com/in/boniface-thuo-52ab3816a" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="tel:+254705719068" className="text-slate-600 hover:text-teal transition-colors">
                <PhoneIcon className="h-6 w-6" />
              </a>
              <a href="mailto:bonithuo@gmail.com" className="text-slate-600 hover:text-teal transition-colors">
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} resumeUrl={resumeUrl} />
    </>
  );
};

export default Hero;