import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-8">
      <div className="container mx-auto text-center text-slate-600">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://github.com/Bonifacethuo" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/boniface-thuo-52ab3816a" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href="mailto:bonithuo@gmail.com" className="hover:text-teal transition-colors">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Boniface Thuo Mwaura. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and Gemini AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
