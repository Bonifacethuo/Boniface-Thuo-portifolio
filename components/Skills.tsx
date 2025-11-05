import React from 'react';
import { ChipIcon } from './Icons';

const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <div className="bg-white/50 text-teal-800 font-semibold py-2 px-4 rounded-full flex items-center space-x-2 shadow-sm border border-white/50 transform hover:scale-105 transition-transform">
    <ChipIcon className="h-5 w-5" />
    <span>{skill}</span>
  </div>
);


const Skills: React.FC = () => {
  const skillsByCategory = {
    'Leadership & Strategy': ['Technical Roadmapping', 'Team Development', 'Project Governance', 'Remote Team Leadership', 'Cross-Functional Collaboration', 'Strategic Data Planning'],
    'Data Systems & Architecture': ['Data Engineering', 'Pipeline Automation', 'Data Governance', 'Model Deployment', 'Event-Based Architectures', 'Data Warehousing'],
    'Machine Learning & Analytics': ['Predictive Modeling', 'Experimentation Design', 'A/B Testing', 'Model Interpretability', 'Feature Engineering', 'Forecasting', 'NLP'],
    'Technology Stack': ['Python', 'SQL', 'Apache Spark', 'Airflow', 'TensorFlow', 'scikit-learn', 'Power BI', 'Tableau', 'Google Data Studio', 'Jupyter', 'Git', 'Trello', 'Asana', 'Kafka (conceptual)', 'Notion', 'Slack', 'Zoom'],
    'Open Knowledge & Research Tools': ['Open Data Science', 'GitHub Collaboration', 'ODK', 'KoboToolbox', 'Open-Source Visualization Tools'],
    'Soft Skills': ['Stakeholder Communication', 'Coaching', 'Process Optimization', 'Privacy by Design', 'Data Ethics'],
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-lg border border-white/30">
          <h2 className="text-3xl font-bold font-heading text-navy text-center mb-12">Skills & Competencies</h2>
          <div className="space-y-10">
            {Object.entries(skillsByCategory).map(([category, skillsList]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-navy text-center mb-6">{category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillsList.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;