import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onMenuClick: () => void;
  onSearch: (query: string) => void;
  onSubmitClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, onSearch, onSubmitClick }) => {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-30 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-6 flex-1">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          {/* Search Bar */}
          <div className="relative hidden sm:block w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-2.5 border-0 rounded-full leading-5 bg-slate-100/50 text-slate-900 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:shadow-lg transition-all duration-200 sm:text-sm"
              placeholder={t.navbar.searchPlaceholder}
              onChange={(e) => onSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-slate-400 text-xs border border-slate-200 rounded px-1.5 py-0.5 hidden lg:block">⌘K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-6 ml-4">
          <nav className="hidden lg:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-primary-600 transition-colors">{t.navbar.analytics}</a>
            <a href="#" className="hover:text-primary-600 transition-colors">{t.navbar.subscribe}</a>
          </nav>

          <div className="h-6 w-px bg-slate-200 hidden lg:block"></div>

          <button className="hidden sm:block px-4 py-2 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
             {t.navbar.login}
          </button>

          <button 
             onClick={onSubmitClick}
             className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {t.navbar.submit}
          </button>
        </div>
      </div>
      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-4">
         <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input
                type="text"
                className="block w-full pl-9 pr-4 py-2 border-0 rounded-lg bg-slate-100 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                placeholder={t.navbar.searchPlaceholder}
                onChange={(e) => onSearch(e.target.value)}
            />
         </div>
      </div>
    </header>
  );
};