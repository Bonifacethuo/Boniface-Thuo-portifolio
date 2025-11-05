import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  details: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, details, duration, responsibilities }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {/* Timeline decoration */}
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-400 after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-emerald-800 bg-emerald-100/70 rounded-full">{duration}</time>
      <div className="text-xl font-bold text-navy">{title}</div>
    </div>
    
    <div className="ml-0 sm:ml-36">
      <div className="text-slate-600 font-medium mb-3">{company} <span className="text-slate-500">| {details}</span></div>
      <ul className="list-disc list-outside space-y-2 pl-5">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-slate-700">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
    { 
        title: 'Machine Learning Specialist', 
        company: 'Upwork', 
        details: 'Remote, Global Clients',
        duration: 'Jan 2025 – Present',
        responsibilities: [
            'Lead end-to-end development of predictive and classification models, improving client forecasting accuracy by 35% across industries.',
            'Provide technical oversight and mentoring to remote project teams, ensuring adherence to reproducible data science standards.',
            'Manage data pipelines, automate workflows, and deploy production-ready ML systems in distributed environments.',
            'Present technical results to non-technical stakeholders via interactive Power BI/Tableau dashboards.',
            'Implemented MLOps principles for versioning, testing, and model deployment in Python and R.'
        ]
    },
    { 
        title: 'Data Analyst', 
        company: 'Kalon Foods', 
        details: 'Hybrid',
        duration: 'Jun 2025 – Aug 2025',
        responsibilities: [
            'Directed data engineering and analytics initiatives to monitor inventory, sales, and demand forecasting.',
            'Automated SQL-based reporting pipelines reducing manual data handling by 60%.',
            'Introduced time-series forecasting models that reduced overstocking by 28%, aligning analytics with operational reliability goals.',
        ]
    },
    { 
        title: 'Data Specialist', 
        company: 'Freelance', 
        details: 'Remote',
        duration: 'Sep 2023 – Jun 2025',
        responsibilities: [
            'Designed and managed automated data collection and reporting systems, improving efficiency by 61%.',
            'Developed modular dashboards providing real-time visibility into business operations.',
            'Partnered with global clients to define data governance frameworks ensuring privacy, accuracy, and scalability.',
        ]
    },
    { 
        title: 'Data Analyst', 
        company: 'XCon Technologies', 
        details: 'Remote',
        duration: 'Jan 2025 – Apr 2025',
        responsibilities: [
            'Managed SQL databases exceeding 200K records, conducting engagement and churn analytics.',
            'Designed Tableau dashboards used by 50+ internal stakeholders for strategy decisions.',
            'Introduced A/B testing frameworks and automated data cleaning systems, improving retention and data integrity.',
        ]
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-lg border border-white/30">
          <h2 className="text-3xl font-bold font-heading text-navy text-center mb-12">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;