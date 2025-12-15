import React from 'react';
import { Tool, Category } from '../types';
import { CATEGORIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { language } = useLanguage();
  const logoUrl = `https://logo.clearbit.com/${tool.domain}`;
  const screenshotUrl = `https://image.thum.io/get/width/400/crop/700/noanimate/${tool.url}`;

  // Resolve category Name based on language
  const categoryObj = CATEGORIES.find(c => c.nameEn === tool.category);
  const displayCategory = categoryObj ? (language === 'pt' ? categoryObj.namePt : categoryObj.nameEn) : tool.category;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 hover:border-primary-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Header Image Section */}
      <div className="h-40 bg-slate-100 relative overflow-hidden">
         {/* Loading skeleton base */}
         <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
         
         <img 
           src={screenshotUrl} 
           alt={`${tool.name} preview`} 
           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90" 
           loading="lazy"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
         
         <div className="absolute top-3 right-3">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border shadow-sm ${
              tool.pricing === 'Free' ? 'bg-emerald-500/80 text-white border-emerald-400/30' : 
              tool.pricing === 'Freemium' ? 'bg-blue-500/80 text-white border-blue-400/30' :
              'bg-slate-700/80 text-white border-slate-600/30'
            }`}>
              {tool.pricing}
            </span>
         </div>
      </div>

      <div className="p-5 flex flex-col flex-1 relative">
        {/* Overlapping Logo */}
        <div className="-mt-10 mb-3 relative z-10">
           <div className="w-14 h-14 rounded-xl bg-white shadow-lg p-1 border border-slate-100 group-hover:scale-110 transition-transform duration-300 ease-out">
              <img 
                src={logoUrl} 
                alt={tool.name} 
                className="w-full h-full object-contain rounded-lg bg-white" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=f1f5f9&color=475569&size=64&font-size=0.4`;
                }}
              />
           </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-heading font-bold text-lg text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">
              {tool.name}
            </h3>
          </div>
          
          <div className="text-xs font-medium text-slate-400 mb-3 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            <span className="truncate max-w-[150px]">{tool.domain}</span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-5">
            {tool.description}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
             <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-50 text-[10px] font-semibold text-slate-500 border border-slate-200 uppercase tracking-wide">
               {displayCategory}
             </span>
          </div>
          
          <div className="flex items-center space-x-1 text-slate-400 group-hover:text-rose-500 transition-colors">
             <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
               <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
             </svg>
             <span className="text-xs font-bold">{tool.votes}</span>
          </div>
        </div>
      </div>
    </a>
  );
};