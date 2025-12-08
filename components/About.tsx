import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Translation } from '../types';

interface AboutProps {
  t: Translation['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-primary-500 pl-6">
              {t.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-primary-400 mb-1">5+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-primary-400 mb-1">20+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="mr-3 text-primary-400" />
                {t.educationTitle}
              </h3>
              <div className="space-y-6">
                {t.education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {index === 0 ? <Award size={20} className="text-yellow-400" /> : <BookOpen size={20} className="text-slate-500" />}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{edu.degree}</h4>
                      <p className="text-primary-300 text-sm">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};