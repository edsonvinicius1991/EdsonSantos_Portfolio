import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { CONTENT, SKILL_METRICS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  
  // Get current translation
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <NavBar lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Skills t={t.skills} metrics={SKILL_METRICS} />
        <Experience t={t.experience} />
        <Projects t={t.projects} />
      </main>
      <Contact t={t.contact} />
    </div>
  );
};

export default App;