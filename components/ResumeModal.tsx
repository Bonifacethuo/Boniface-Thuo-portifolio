import React from 'react';
import { CloseIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  // The resumeUrl is the preview link. The download link needs to be the export link.
  const downloadUrl = resumeUrl.replace('/preview', '/export?format=pdf');

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold font-heading text-navy">Resume Preview</h3>
          <button 
            onClick={onClose} 
            className="text-slate-500 hover:text-navy p-1 rounded-full transition-colors"
            aria-label="Close resume viewer"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-grow p-2 overflow-y-auto">
          <iframe 
            src={resumeUrl}
            className="w-full h-full border-0"
            title="Boniface Thuo Mwaura Resume"
          />
        </div>

        <div className="p-4 border-t bg-slate-50 text-right">
          <a 
            href={downloadUrl} 
            download="Boniface-Thuo-Mwaura-Resume.pdf" 
            className="inline-block bg-teal text-white font-bold py-2 px-6 rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-md transform hover:scale-105"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ResumeModal;