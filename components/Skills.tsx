import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { 
  Code2, Database, Cog, CheckCircle, 
  BarChart3, FileCode2, Server, Globe, 
  Terminal, Workflow, Laptop2, Layers,
  Box, Coffee, Table2, ShieldCheck,
  Braces
} from 'lucide-react';
import { Translation, SkillMetric } from '../types';

interface SkillsProps {
  t: Translation['skills'];
  metrics: SkillMetric[];
}

// Helper to get icon based on technology name
const getTechIcon = (tech: string) => {
  const normalized = tech.toLowerCase();
  const size = 16;
  
  if (normalized.includes('power bi') || normalized.includes('dax')) return <BarChart3 size={size} className="text-yellow-500" />;
  if (normalized.includes('python')) return <FileCode2 size={size} className="text-blue-500" />;
  if (normalized.includes('sql') || normalized.includes('data') || normalized.includes('postgres')) return <Database size={size} className="text-slate-300" />;
  if (normalized.includes('azure') || normalized.includes('cloud')) return <Server size={size} className="text-blue-400" />;
  
  if (normalized.includes('react') || normalized.includes('next')) return <Code2 size={size} className="text-cyan-400" />;
  if (normalized.includes('typescript')) return <Braces size={size} className="text-blue-600" />;
  if (normalized.includes('javascript')) return <Braces size={size} className="text-yellow-400" />;
  
  if (normalized.includes('java')) return <Coffee size={size} className="text-red-500" />;
  if (normalized.includes('spring')) return <Layers size={size} className="text-green-500" />;
  if (normalized.includes('tailwind')) return <Code2 size={size} className="text-cyan-500" />;
  
  if (normalized.includes('automate') || normalized.includes('apps')) return <Workflow size={size} className="text-blue-600" />;
  if (normalized.includes('excel') || normalized.includes('vba')) return <Table2 size={size} className="text-green-600" />;
  if (normalized.includes('sap')) return <Box size={size} className="text-blue-800" />;
  
  if (normalized.includes('test') || normalized.includes('jest') || normalized.includes('cypress')) return <ShieldCheck size={size} className="text-emerald-500" />;
  if (normalized.includes('api')) return <Globe size={size} className="text-purple-400" />;
  
  return <Terminal size={size} className="text-slate-400" />;
};

export const Skills: React.FC<SkillsProps> = ({ t, metrics }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chart Section */}
          <div className="lg:col-span-1 h-[300px] lg:h-auto bg-slate-900/50 rounded-xl border border-slate-800 p-4 flex flex-col justify-center items-center backdrop-blur-sm relative overflow-hidden">
             {/* Tech decoration background */}
             <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
             
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={metrics}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skill Level"
                    dataKey="A"
                    stroke="#4ade80"
                    strokeWidth={2}
                    fill="#4ade80"
                    fillOpacity={0.3}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </RadarChart>
             </ResponsiveContainer>
          </div>

          {/* Grid Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Data */}
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                  <Database className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{t.categories.data}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'DAX', 'SQL', 'Python (Pandas/Numpy)', 'Azure Data'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                    {getTechIcon(s)}
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Dev */}
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                  <Laptop2 className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{t.categories.dev}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Next.js', 'Java', 'Spring Boot', 'Tailwind CSS'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                    {getTechIcon(s)}
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Automation */}
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                   <Cog className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{t.categories.automation}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Power Automate', 'Power Apps', 'VBA', 'SAP Scripting', 'Excel Advanced'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                    {getTechIcon(s)}
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* QA */}
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                  <CheckCircle className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{t.categories.qa}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Automated Testing', 'API Testing', 'Performance Testing', 'Jest', 'Cypress'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                    {getTechIcon(s)}
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};