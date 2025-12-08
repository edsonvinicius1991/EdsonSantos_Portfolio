import React, { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavBarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
}

export const NavBar: React.FC<NavBarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.experience, href: '#experience' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-teal-400 bg-clip-text text-transparent">
              Edson.Dev
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="flex items-center space-x-1 text-slate-300 hover:text-white border border-slate-700 px-3 py-1 rounded-full text-xs hover:border-primary-500 transition-all"
              >
                <Languages size={14} />
                <span>{lang.toUpperCase()}</span>
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
             <button
                onClick={() => { toggleLang(); setIsOpen(false); }}
                className="w-full text-left text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Change Language ({lang === 'pt' ? 'English' : 'Português'})
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};