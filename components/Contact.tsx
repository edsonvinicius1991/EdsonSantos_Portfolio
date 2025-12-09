import React from 'react';
import { Mail, Linkedin, Github, ChevronUp, MessageCircle } from 'lucide-react';
import { Translation } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  t: Translation['contact'];
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
              <p className="text-slate-400 max-w-md">{t.text}</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:edsonvinicius@hotmail.com" className="group flex flex-col items-center">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary-500 transition-colors">
                    <Mail size={24} className="text-white" />
                  </div>
                  <span className="mt-2 text-sm text-slate-400 group-hover:text-primary-400">{t.email}</span>
              </a>
              <a href="https://www.linkedin.com/in/edson-oliveira91/" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary-500 transition-colors">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <span className="mt-2 text-sm text-slate-400 group-hover:text-primary-400">{t.linkedin}</span>
              </a>
              <a href="https://github.com/edsonvinicius1991" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-primary-500 transition-colors">
                    <Github size={24} className="text-white" />
                  </div>
                  <span className="mt-2 text-sm text-slate-400 group-hover:text-primary-400">{t.github}</span>
              </a>
              <a href="https://wa.me/5522999632215" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-green-500 transition-colors">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <span className="mt-2 text-sm text-slate-400 group-hover:text-green-400">{t.whatsapp}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Edson V O Santos. All rights reserved.
          </p>
          <a href="#hero" className="mt-4 md:mt-0 flex items-center text-sm text-slate-400 hover:text-white transition-colors">
            Back to Top <ChevronUp size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};