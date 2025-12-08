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
import { ScrollReveal } from './ScrollReveal';
import { PowerAppsIcon, PowerAutomateIcon, PowerPlatformIcon, OutSystemsIcon } from './TechIcons';

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
  
  if (normalized.includes('power apps')) return <PowerAppsIcon className="w-4 h-4" />;
  if (normalized.includes('power automate')) return <PowerAutomateIcon className="w-4 h-4" />;
  if (normalized.includes('power platform')) return <PowerPlatformIcon className="w-4 h-4" />;
  if (normalized.includes('outsystems')) return <OutSystemsIcon className="w-4 h-4" />;
  
  if (normalized.includes('automate') || normalized.includes('apps')) return <Workflow size={size} className="text-blue-600" />;
  if (normalized.includes('excel') || normalized.includes('vba')) return <Table2 size={size} className="text-green-600" />;
  if (normalized.includes('sap')) return <Box size={size} className="text-blue-800" />;
  
  if (normalized.includes('test') || normalized.includes('jest') || normalized.includes('cypress')) return <ShieldCheck size={size} className="text-emerald-500" />;
  if (normalized.includes('api')) return <Globe size={size} className="text-purple-400" />;
  
  return <Terminal size={size} className="text-slate-400" />;
};

const TechLogo: React.FC<{
  name: string;
  urls?: string[];
  component?: React.ComponentType<{ className?: string }>;
  className?: string;
  forceColor?: boolean;
}> = ({ name, urls, component: Component, className = "", forceColor = false }) => {
  const [index, setIndex] = React.useState(0);
  
  const baseClasses = forceColor
    ? "opacity-100 filter-none"
    : "filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100";
    
  if (Component) {
    return (
      <div className={`h-10 w-10 md:h-12 md:w-12 transition-all duration-300 transform group-hover:scale-110 ${baseClasses} ${className}`}>
        <Component className={`w-full h-full object-contain ${className || ''}`} />
      </div>
    );
  }

  const src = urls ? urls[index] : '';

  return (
    <img
      src={src}
      alt={name}
      title={name}
      onError={() => {
        if (urls && index < urls.length - 1) setIndex(index + 1);
      }}
      className={`h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300 transform group-hover:scale-110 ${baseClasses} ${className}`}
    />
  );
};

const TECH_GROUPS = [
  {
    title: 'Dados & Analytics',
    key: 'data',
    items: [
      { name: 'Power BI', urls: ['https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg'] },
      { name: 'Tableau', urls: ['https://cdn.worldvectorlogo.com/logos/tableau-software.svg'] },
      { name: 'Python', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'] },
      { name: 'SQL Server', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'], className: 'invert' },
      { name: 'PostgreSQL', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'] },
      { name: 'Azure', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'] },
    ],
  },
  {
    title: 'Desenvolvimento',
    key: 'dev',
    items: [
      { name: 'HTML5', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'] },
      { name: 'CSS3', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'] },
      { name: 'React', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'] },
      { name: 'Next.js', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'], className: 'invert' },
      { name: 'TypeScript', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'] },
      { name: 'Node.js', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'] },
      { name: 'Java', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'] },
      { name: 'Spring', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'] },
      { name: 'Tailwind', urls: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'] },
    ],
  },
  {
    title: 'Automação & Low-Code',
    key: 'automation',
    items: [
      { name: 'Power Apps', component: PowerAppsIcon },
      { name: 'Power Automate', component: PowerAutomateIcon },
      { name: 'Microsoft Power Platform', component: PowerPlatformIcon },
      { name: 'OutSystems', component: OutSystemsIcon },
      { name: 'SAP', urls: ['https://cdn.simpleicons.org/sap'], className: 'invert' },
    ],
  },
];

export const Skills: React.FC<SkillsProps> = ({ t, metrics }) => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.title}</h2>
            <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Chart Section */}
          <ScrollReveal delay={0.2} className="lg:col-span-1 h-full">
            <div className="h-[300px] lg:h-full bg-slate-900/50 rounded-xl border border-slate-800 p-4 flex flex-col justify-center items-center backdrop-blur-sm relative overflow-hidden">
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
          </ScrollReveal>

          {/* Grid Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Data */}
            <ScrollReveal delay={0.3}>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group h-full">
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
            </ScrollReveal>

            {/* Dev */}
            <ScrollReveal delay={0.4}>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                    <Code2 className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t.categories.dev}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Java (Spring)'].map(s => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                      {getTechIcon(s)}
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Automation */}
            <ScrollReveal delay={0.5}>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                    <Cog className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t.categories.automation}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Power Automate', 'Power Apps', 'VBA/Excel', 'SAP Scripts'].map(s => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                      {getTechIcon(s)}
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* QA */}
            <ScrollReveal delay={0.6}>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5 group h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-primary-900/30 transition-colors">
                    <CheckCircle className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t.categories.qa}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Jest', 'Cypress', 'Playwright', 'TDD/BDD'].map(s => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-primary-500 hover:text-white transition-all">
                      {getTechIcon(s)}
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
        
        {/* Tech Logos Grouped */}
        <ScrollReveal delay={0.8}>
          <div className="border-t border-slate-800 pt-12 space-y-10">
            {TECH_GROUPS.map(group => (
              <div key={group.key}>
                <p className="text-center text-slate-400 mb-6 text-xs uppercase tracking-wider font-semibold">
                  {group.title}
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {group.items.map((logo: any) => (
                    <div key={`${group.key}-${logo.name}`} className="group relative flex flex-col items-center justify-center p-2">
                      <TechLogo 
                        name={logo.name} 
                        urls={logo.urls} 
                        component={logo.component}
                        className={logo.className}
                        forceColor={logo.forceColor}
                      />
                      <span className="absolute -bottom-8 text-xs text-primary-400 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
