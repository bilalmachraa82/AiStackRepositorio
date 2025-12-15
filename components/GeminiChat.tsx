import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';

interface GeminiChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeminiChat: React.FC<GeminiChatProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [loading, setLoading] = useState(false);

  // Update initial message when language changes or chat opens
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'model', text: t.chat.welcome }]);
    }
  }, [t.chat.welcome]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      if (process.env.API_KEY) {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          // Adjust system instruction based on language
          const sysInstruction = language === 'pt' 
            ? "És um consultor especialista em Ferramentas de IA para a 'AiParaTi'. Recomenda ferramentas com base nas necessidades do utilizador. Responde em Português."
            : "You are an expert AI Tools consultant for 'AiParaTi'. Recommend tools based on the user's needs. Keep answers concise.";

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userMsg,
            config: {
                systemInstruction: sysInstruction
            }
          });
          setMessages(prev => [...prev, { role: 'model', text: response.text || "No response." }]);
      } else {
         setTimeout(() => {
             const demoResponse = language === 'pt' 
                ? "Esta é uma resposta de demonstração. Configura a tua API_KEY para obter recomendações reais do Gemini!"
                : "This is a demo response. Configure your API_KEY to get real AI recommendations!";
             setMessages(prev => [...prev, { role: 'model', text: demoResponse }]);
         }, 1000);
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col" style={{ height: '500px' }}>
      <div className="bg-slate-900 px-4 py-3 flex justify-between items-center">
        <h3 className="text-white font-medium flex items-center gap-2">
          <span>✨</span> {t.chat.title}
        </h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm ${
              msg.role === 'user' 
                ? 'bg-primary-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 rounded-bl-none shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
             </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.chat.placeholder}
            className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};