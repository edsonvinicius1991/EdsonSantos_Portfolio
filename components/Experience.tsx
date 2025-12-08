import React from 'react';
import { Briefcase } from 'lucide-react';
import { Translation } from '../types';

interface ExperienceProps {
  t: Translation['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ t }) => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {t.items.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-0 bg-slate-900 border-2 border-primary-500 rounded-full p-1.5">
                <Briefcase size={16} className="text-primary-500" />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="text-lg text-primary-400 font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-slate-300 text-sm md:text-base flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};