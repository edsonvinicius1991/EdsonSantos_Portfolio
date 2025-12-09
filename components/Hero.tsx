import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  t: Translation['hero'];
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = t.role;

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-950">
      
      {/* Background: Tech Grid & Glow */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-left order-2 lg:order-1">
            
            {/* Tech Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
               <span className="inline-flex items-center px-3 py-1 rounded border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono tracking-wider">
                 <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
                 AVAILABLE FOR HIRE
               </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-sans font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-tight"
            >
              Edson Santos
              <span className="text-primary-500">.</span>
            </motion.h1>
            
            {/* Typewriter Effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-8 mb-8 flex items-center"
            >
              <span className="text-xl sm:text-2xl font-mono text-slate-400">
                <span className="text-primary-500 mr-2">$</span>
                <span className="text-slate-200">{displayText}</span>
                <span className="inline-block w-2 h-5 ml-1 bg-primary-500 animate-pulse align-middle"></span>
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl"
            >
              {t.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                <Terminal size={18} className="mr-2" />
                {t.ctaProject}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded transition-all"
              >
                {t.ctaContact}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Tech Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Abstract Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-teal-500 rounded-lg blur opacity-30 animate-pulse"></div>
              
              {/* Code Window */}
              <div className="relative bg-slate-900 rounded-lg border border-slate-800 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center px-4 py-3 bg-slate-950 border-b border-slate-800">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-500 font-mono flex-1 text-center">portfolio.tsx</div>
                </div>
                
                {/* Window Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-2">
                    <div className="text-slate-400">
                      <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = {'{'}
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">name</span>: <span className="text-green-400">"Edson Santos"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">role</span>: <span className="text-green-400">"Full Stack Dev"</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">skills</span>: [
                    </div>
                    <div className="pl-8 text-green-400">
                      "React", "Node.js", "Python",
                    </div>
                    <div className="pl-8 text-green-400">
                      "SQL", "Power BI", "AWS"
                    </div>
                    <div className="pl-4 text-slate-300">],</div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">hardWorker</span>: <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-blue-400">quickLearner</span>: <span className="text-orange-400">true</span>
                    </div>
                    <div className="text-slate-400">{'}'};</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -bottom-4 bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <Terminal size={20} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Status</div>
                    <div className="text-sm font-bold text-white">Online & Coding</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
