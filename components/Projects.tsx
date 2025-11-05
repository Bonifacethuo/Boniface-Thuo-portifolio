import React from 'react';
import { CodeIcon, ExternalLinkIcon } from './Icons';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, githubLink }) => (
  <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 border border-white/30">
    <div className="flex justify-between items-start mb-4">
      <CodeIcon className="h-10 w-10 text-teal" />
      <div className="flex space-x-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal transition-colors">
          <ExternalLinkIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
    <h3 className="text-xl font-bold font-heading text-navy mb-2">{title}</h3>
    <p className="text-slate-700 flex-grow mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <span key={i} className="text-xs bg-cyan-100/50 text-cyan-800 font-semibold px-2 py-1 rounded">{t}</span>
      ))}
    </div>
  </div>
);


const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Chatbot for Kenya’s Education System',
      description: "Architected and deployed an AI-driven chatbot leveraging TF-IDF, Cosine Similarity, and Random Forest/XGBoost to automate responses to education-related queries. Integrated sentiment analysis (VADER/TextBlob) to measure public opinion on Kenya’s Competency-Based Curriculum (CBC).",
      tech: ['TF-IDF', 'Cosine Similarity', 'Random Forest', 'XGBoost', 'VADER', 'TextBlob', 'Python'],
      githubLink: 'https://github.com/Bonifacethuo/Phase-5-Project'
    },
    {
      title: 'Aviation Accident Analysis for Safety Insights',
      description: 'Analyzed 9,600+ records from the NTSB dataset to identify low-risk aircraft models. Applied data warehousing and statistical modeling for comparative risk analysis, recommending safety strategies that informed investment decisions.',
      tech: ['Data Warehousing', 'Statistical Modeling', 'Pandas', 'Tableau', 'Data Analysis'],
      githubLink: 'https://github.com/Bonifacethuo/Phase-1-Project-Data-Science'
    }
  ];

  return (
    <section id="projects" className="py-24">
       <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading text-navy text-center mb-12">Relevant Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;