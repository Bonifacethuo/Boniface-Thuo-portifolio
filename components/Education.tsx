import React from 'react';
import { AcademicCapIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading text-navy text-center mb-12">Education & Certifications</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
            <AcademicCapIcon className="h-8 w-8 text-teal mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-navy">Bachelor of Science in Animal Science with Information Technology</h3>
              <p className="text-slate-700">Maseno University | 2018</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
            <AcademicCapIcon className="h-8 w-8 text-teal mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-navy">Data Science Certification</h3>
              <p className="text-slate-700">Moringa School | 2024</p>
              <p className="text-slate-600 mt-1 text-sm">Focused on Python, SQL, Tableau, scikit-learn, TensorFlow, and data-driven project management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;