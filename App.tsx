import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { ToolCard } from './components/ToolCard';
import { GeminiChat } from './components/GeminiChat';
import { SubmitModal } from './components/SubmitModal';
import { generateTools } from './constants';
import { Tool, SortOption } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.POPULAR);

  const TOOLS_PER_PAGE = 24;

  useEffect(() => {
    const tools = generateTools();
    setAllTools(tools);
  }, []);

  const filteredTools = useMemo(() => {
    let result = allTools;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter(t => t.category === selectedCategory);
    }

    if (sortBy === SortOption.POPULAR) {
      result = [...result].sort((a, b) => b.votes - a.votes);
    } else if (sortBy === SortOption.NAME) {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [allTools, searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(filteredTools.length / TOOLS_PER_PAGE);
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * TOOLS_PER_PAGE,
    currentPage * TOOLS_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-slate-50/50">
      
      <Sidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={(cat) => { setSelectedCategory(cat); setCurrentPage(1); }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 relative">
        <Navbar 
          onMenuClick={() => setIsSidebarOpen(true)} 
          onSearch={(q) => { setSearchQuery(q); setCurrentPage(1); }}
          onSubmitClick={() => setIsSubmitModalOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
          
          {/* Hero Section / Product of the Day (Only Home) */}
          {!selectedCategory && !searchQuery && currentPage === 1 && (
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏆</span>
                <h2 className="text-xl font-bold font-heading text-slate-900">{t.hero.badge}</h2>
              </div>
              
              <div className="relative rounded-3xl p-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 shadow-glow">
                <div className="bg-white rounded-[22px] overflow-hidden relative">
                   {/* Background Pattern */}
                   <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-20 hidden md:block"></div>
                   
                   <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
                     <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wide shadow-sm">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                          </span>
                          {t.hero.featured}
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                          {t.hero.title}
                        </h1>
                        
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                          {t.hero.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-2">
                          <button className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
                            {t.hero.visit}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </button>
                          <button className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm">
                            {t.hero.details}
                          </button>
                        </div>
                     </div>
                     
                     <div className="w-full md:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group relative">
                        <img 
                          src="https://image.thum.io/get/width/600/crop/800/noanimate/https://openai.com/chatgpt" 
                          alt="Featured Tool" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 pointer-events-none mix-blend-overlay"></div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="sticky top-24 z-20 bg-slate-50/95 backdrop-blur rounded-xl p-4 mb-8 border border-slate-200/60 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    {selectedCategory ? (
                      <>
                        <span className="text-primary-600">#</span> {selectedCategory}
                      </>
                    ) : searchQuery ? (
                       <>
                        <span className="text-slate-400 font-normal">{t.controls.resultsFor}</span> "{searchQuery}"
                       </>
                    ) : t.controls.discover}
                  </h2>
                  <p className="text-slate-500 text-sm mt-1 font-medium">
                    {filteredTools.length} {t.controls.toolsAvailable}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                   <label className="text-sm font-medium text-slate-500">{t.controls.sort}</label>
                   <div className="relative">
                      <select 
                        className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:outline-none shadow-sm cursor-pointer hover:border-slate-300 transition-colors"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                      >
                        <option value={SortOption.POPULAR}>{t.controls.sortOptions.popular}</option>
                        <option value={SortOption.NEWEST}>{t.controls.sortOptions.newest}</option>
                        <option value={SortOption.NAME}>{t.controls.sortOptions.name}</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Grid */}
          {paginatedTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-8">
              {paginatedTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-3xl border border-slate-200 border-dashed">
               <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">🔍</span>
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.empty.title}</h3>
               <p className="text-slate-500 max-w-md">{t.empty.desc}</p>
               <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="mt-6 px-6 py-2.5 bg-primary-50 text-primary-700 font-medium rounded-lg hover:bg-primary-100 transition-colors"
               >
                 {t.empty.clear}
               </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
               <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1}
                 className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-white rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
               >
                 <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               </button>
               
               <div className="flex items-center gap-2 px-2">
                 {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                   let pageNum = i + 1;
                   if (totalPages > 5 && currentPage > 3) {
                      pageNum = currentPage - 2 + i;
                      if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                   }
                   
                   return (
                     <button
                       key={pageNum}
                       onClick={() => setCurrentPage(pageNum)}
                       className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 shadow-sm ${
                         currentPage === pageNum 
                           ? 'bg-slate-900 text-white scale-110' 
                           : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                       }`}
                     >
                       {pageNum}
                     </button>
                   );
                 })}
               </div>

               <button 
                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                 disabled={currentPage === totalPages}
                 className="w-10 h-10 flex items-center justify-center border border-slate-200 bg-white rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
               >
                 <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8 mt-12">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <h4 className="font-heading font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-3xl">✨</span> AiParaTi
                </h4>
                <p className="text-slate-500 text-sm leading-loose max-w-sm">
                  {t.footer.desc}
                </p>
                <div className="flex gap-4 mt-8">
                   <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692 1.197 0 1.968.115 2.688.199v2.8z"/></svg>
                   </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 font-heading">{t.footer.platform}</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-primary-600 transition-colors">{t.controls.discover}</a></li>
                  <li><a href="#" className="hover:text-primary-600 transition-colors">{t.navbar.submit}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 font-heading">{t.footer.legal}</h4>
                <ul className="space-y-4 text-sm text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-primary-600 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
           </div>
           <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} AiParaTi Inc. {t.footer.rights}
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                 <span>{t.footer.madeWith}</span>
                 <span className="text-red-500">❤️</span>
                 <span>by AiParaTi Team</span>
              </div>
           </div>
        </footer>
      </div>

      {/* Floating Action Button for Chat */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group relative w-16 h-16 rounded-full bg-slate-900 text-white shadow-2xl hover:scale-105 hover:shadow-primary-500/20 transition-all duration-300 flex items-center justify-center overflow-hidden"
        >
           <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div className="relative z-10">
             {isChatOpen ? (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             ) : (
               <span className="text-3xl">✨</span>
             )}
           </div>
        </button>
      </div>

      {/* Components */}
      <GeminiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <SubmitModal isOpen={isSubmitModalOpen} onClose={() => setIsSubmitModalOpen(false)} />

    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;