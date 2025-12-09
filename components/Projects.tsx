import React, { useState } from 'react';
import { ExternalLink, Github, Code, TrendingUp, AlertCircle, Eye } from 'lucide-react';
import { Translation, ProjectItem } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  t: Translation['projects'];
}

export const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: clear selected project after animation, but keeping it prevents content jump during close
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
            <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 h-full flex flex-col">
                
                {/* Image Header */}
                <div 
                  className="h-48 w-full bg-slate-800 overflow-hidden relative flex-shrink-0 cursor-pointer group/image"
                  onClick={() => openModal(project)}
                >
                  <div className="absolute inset-0 bg-slate-900/60 group-hover/image:bg-slate-900/40 transition-all z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                    <span className="bg-slate-900/80 text-white px-4 py-2 rounded-full flex items-center backdrop-blur-sm border border-slate-700">
                      <Eye size={16} className="mr-2" /> View Details
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-bold uppercase rounded text-white
                      ${project.category === 'data' ? 'bg-purple-600' : project.category === 'qa' ? 'bg-orange-600' : 'bg-blue-600'}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 h-10 overflow-hidden text-ellipsis display-box line-clamp-2">
                    {project.description}
                  </p>

                  {/* Case Study Mini-Grid */}
                  <div className="space-y-4 mb-6 border-t border-slate-800 pt-4 flex-grow">
                    <div className="flex items-start">
                      <AlertCircle size={16} className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Problem</p>
                        <p className="text-sm text-slate-300">{project.problem}</p>
                      </div>
                    </div>
                     <div className="flex items-start">
                      <Code size={16} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Solution</p>
                        <p className="text-sm text-slate-300">{project.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp size={16} className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">Impact</p>
                        <p className="text-sm text-slate-300">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-800 mt-auto">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-primary-400 transition-colors">
                      <Github size={16} className="mr-2" />
                      {t.viewCode}
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-primary-400 transition-colors">
                        <ExternalLink size={16} className="mr-2" />
                        {t.viewDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};