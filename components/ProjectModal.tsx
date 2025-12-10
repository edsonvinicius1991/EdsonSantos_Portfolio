import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens with a new project
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image || ''];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header / Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={onClose}
                className="p-2 bg-slate-950/50 hover:bg-slate-800 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
              {/* Image Carousel Section */}
              <div className="w-full lg:w-2/3 bg-slate-950 relative min-h-[300px] lg:min-h-full flex items-center justify-center group">
                {images.length > 0 && (
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img
                      src={images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="max-w-full max-h-[50vh] lg:max-h-[80vh] object-contain rounded-lg shadow-lg"
                    />
                    
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prevImage(); }}
                          className="absolute left-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); nextImage(); }}
                          className="absolute right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={24} />
                        </button>
                        
                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex ? 'bg-primary-500 w-4' : 'bg-slate-500 hover:bg-slate-400'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-1/3 p-6 lg:p-8 flex flex-col bg-slate-900 overflow-y-auto border-l border-slate-800">
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 border ${
                    project.category === 'dev' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    project.category === 'data' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Description</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {project.longDescription || project.description}
                    </p>
                  </div>



                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Key Features</h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-400">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.architecture && (
                    <div>
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Technical Architecture</h3>
                      <div className="space-y-3 text-sm">
                        {project.architecture.frontend && (
                          <div>
                            <span className="text-slate-300 font-medium block mb-1">Frontend</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {project.architecture.frontend.join(', ')}
                            </p>
                          </div>
                        )}
                        {project.architecture.backend && (
                          <div>
                            <span className="text-slate-300 font-medium block mb-1">Backend</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {project.architecture.backend.join(', ')}
                            </p>
                          </div>
                        )}
                        {project.architecture.integrations && (
                          <div>
                            <span className="text-slate-300 font-medium block mb-1">Integrations</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {project.architecture.integrations.join(', ')}
                            </p>
                          </div>
                        )}
                        {project.architecture.security && (
                          <div>
                            <span className="text-slate-300 font-medium block mb-1">Security</span>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {project.architecture.security.join(', ')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors text-sm font-medium"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
