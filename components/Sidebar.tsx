import React from 'react';
import { CATEGORIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory, isOpen, onClose }) => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`
        fixed top-0 left-0 z-40 w-72 h-screen bg-white border-r border-slate-200/60 transform transition-transform duration-300 ease-out
        md:translate-x-0 md:sticky md:top-0 md:h-screen overflow-hidden flex flex-col shadow-xl md:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex-shrink-0 flex justify-between items-center">
           <h1 className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onSelectCategory(null)}>
             <div className="w-8 h-8 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-glow">
                <span className="text-lg">AI</span>
             </div>
             AiParaTi
           </h1>
        </div>

        {/* Language Switcher */}
        <div className="px-6 pb-2">
            <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setLanguage('pt')} 
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-bold rounded-md transition-all ${language === 'pt' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <span>🇵🇹</span> PT
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-bold rounded-md transition-all ${language === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <span>🇺🇸</span> EN
                </button>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4 mt-2">
          <div className="mb-8">
            <h3 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.sidebar.discover}</h3>
             <button
              onClick={() => { onSelectCategory(null); onClose(); }}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === null 
                ? 'bg-primary-50 text-primary-700 shadow-sm ring-1 ring-primary-200' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">🏠</span>
              <span>{t.sidebar.allTools}</span>
            </button>
            <button
              onClick={() => { /* Placeholder */ onClose(); }}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors mt-1"
            >
              <span className="text-lg">🔥</span>
              <span>{t.sidebar.popular}</span>
            </button>
            <button
               onClick={() => { /* Placeholder */ onClose(); }}
               className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors mt-1"
            >
              <span className="text-lg">✨</span>
              <span>{t.sidebar.newest}</span>
            </button>
          </div>

          <div>
            <h3 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.sidebar.categories}</h3>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { onSelectCategory(cat.nameEn); onClose(); }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${
                    selectedCategory === cat.nameEn 
                    ? 'bg-primary-50 text-primary-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <span className={`text-base transition-transform group-hover:scale-110 ${selectedCategory === cat.nameEn ? 'opacity-100' : 'opacity-70'}`}>{cat.icon}</span>
                  <span className="truncate">{language === 'pt' ? cat.namePt : cat.nameEn}</span>
                  {selectedCategory === cat.nameEn && (
                     <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom sticky area */}
        <div className="p-4 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
           <div className="flex items-center p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white shadow-sm flex items-center justify-center text-slate-600 font-bold text-xs overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-slate-700 group-hover:text-primary-600 transition-colors">{t.sidebar.user}</p>
                <p className="text-xs text-slate-400">{t.sidebar.plan}</p>
              </div>
           </div>
        </div>
      </aside>
    </>
  );
};