import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Translation } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface AboutProps {
  t: Translation['about'];
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
            <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 items-center">
          {/* Profile Image Column */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl group">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="/profile_v2.png"
                  alt="Edson Santos"
                  className="w-full h-full object-cover object-[center_35%] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bio Column */}
          <div className="space-y-6 lg:col-span-3">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-primary-500 pl-4">
                {t.bio}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-3 mt-8">
              <ScrollReveal delay={0.3}>
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-primary-500/30 transition-colors">
                  <div className="text-2xl font-bold text-primary-400 mb-1">5+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 hover:border-primary-500/30 transition-colors">
                  <div className="text-2xl font-bold text-primary-400 mb-1">20+</div>
                  <div className="text-sm text-slate-400">Projects Delivered</div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Education Column */}
          <ScrollReveal direction="left" delay={0.4} className="lg:col-span-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl opacity-20 blur-lg"></div>
              <div className="relative bg-slate-800 rounded-xl p-6 border border-slate-700 h-full flex flex-col justify-center">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};