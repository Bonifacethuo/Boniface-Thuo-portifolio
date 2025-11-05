
import React from 'react';
import { PhoneIcon, MailIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-lg border border-white/30">
          <h2 className="text-3xl font-bold font-heading text-navy mb-4">Get In Touch</h2>
          <p className="max-w-xl mx-auto mb-8 text-slate-700">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5 text-teal" />
              <a href="mailto:bonithuo@gmail.com" className="text-navy hover:text-teal transition-colors">bonithuo@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-teal" />
              <a href="tel:+254705719068" className="text-navy hover:text-teal transition-colors">+254 705 719 068</a>
            </div>
          </div>
          <a href="mailto:bonithuo@gmail.com" className="inline-block bg-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-lg transform hover:scale-105">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;