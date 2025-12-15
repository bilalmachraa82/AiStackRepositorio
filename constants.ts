import { Category, Tool } from './types';

// Translations Dictionary
export const TRANSLATIONS = {
  en: {
    sidebar: {
      discover: "Discover",
      allTools: "All Tools",
      popular: "Popular",
      newest: "Newest",
      categories: "Categories",
      user: "Demo User",
      plan: "Free Plan"
    },
    navbar: {
      searchPlaceholder: "Search 1,000+ AI tools...",
      login: "Login",
      submit: "Submit Tool",
      analytics: "Analytics",
      subscribe: "Subscribe"
    },
    hero: {
      badge: "Product of the Day",
      featured: "Featured Choice",
      title: "OpenAI ChatGPT-4o",
      desc: "Experience the next evolution of AI interaction. With multimodal capabilities, faster reasoning, and human-like conversation, it's the ultimate assistant.",
      visit: "Visit Website",
      details: "More Details"
    },
    controls: {
      resultsFor: "Results for:",
      toolsAvailable: "tools available",
      sort: "Sort:",
      sortOptions: {
        popular: "Most Popular",
        newest: "Newest Added",
        name: "Alphabetical"
      },
      discover: "Discover Tools"
    },
    empty: {
      title: "No tools found",
      desc: "We couldn't find any tools matching your criteria. Try clearing filters or searching for something else.",
      clear: "Clear all filters"
    },
    footer: {
      desc: "AiParaTi is the definitive directory for artificial intelligence tools. We curate the best tools daily.",
      platform: "Platform",
      legal: "Legal",
      madeWith: "Made with",
      rights: "All rights reserved."
    },
    modal: {
      title: "Submit a Tool",
      name: "Tool Name",
      url: "Website URL",
      category: "Category",
      desc: "Short Description",
      cancel: "Cancel",
      submit: "Submit for Review"
    },
    chat: {
      title: "AI Assistant",
      welcome: "Hi! I'm your AiParaTi assistant. Ask me anything about AI tools.",
      placeholder: "Ask for a recommendation..."
    }
  },
  pt: {
    sidebar: {
      discover: "Descobrir",
      allTools: "Todas as Ferramentas",
      popular: "Populares",
      newest: "Novidades",
      categories: "Categorias",
      user: "Utilizador Demo",
      plan: "Plano Gratuito"
    },
    navbar: {
      searchPlaceholder: "Pesquisar 1.000+ ferramentas...",
      login: "Entrar",
      submit: "Submeter",
      analytics: "Analítica",
      subscribe: "Subscrever"
    },
    hero: {
      badge: "Produto do Dia",
      featured: "Escolha em Destaque",
      title: "OpenAI ChatGPT-4o",
      desc: "Experimenta a próxima evolução da interação com IA. Com capacidades multimodais, raciocínio rápido e conversação humana, é o assistente definitivo.",
      visit: "Visitar Site",
      details: "Mais Detalhes"
    },
    controls: {
      resultsFor: "Resultados para:",
      toolsAvailable: "ferramentas disponíveis",
      sort: "Ordenar:",
      sortOptions: {
        popular: "Mais Populares",
        newest: "Mais Recentes",
        name: "Alfabético"
      },
      discover: "Descobrir Ferramentas"
    },
    empty: {
      title: "Nenhuma ferramenta encontrada",
      desc: "Não encontramos ferramentas com os teus critérios. Tenta limpar os filtros ou pesquisar por outra coisa.",
      clear: "Limpar filtros"
    },
    footer: {
      desc: "AiParaTi é o diretório definitivo para ferramentas de inteligência artificial. Curamos as melhores ferramentas diariamente.",
      platform: "Plataforma",
      legal: "Legal",
      madeWith: "Feito com",
      rights: "Todos os direitos reservados."
    },
    modal: {
      title: "Submeter Ferramenta",
      name: "Nome da Ferramenta",
      url: "URL do Website",
      category: "Categoria",
      desc: "Descrição Curta",
      cancel: "Cancelar",
      submit: "Enviar para Revisão"
    },
    chat: {
      title: "Assistente IA",
      welcome: "Olá! Sou o assistente AiParaTi. Pergunta-me qualquer coisa sobre ferramentas de IA.",
      placeholder: "Pede uma recomendação..."
    }
  }
};

export const CATEGORIES: Category[] = [
  { id: '1', nameEn: 'Artificial Intelligence', namePt: 'Inteligência Artificial', slug: 'ai', icon: '🤖' },
  { id: '2', nameEn: 'Productivity', namePt: 'Produtividade', slug: 'productivity', icon: '⚡' },
  { id: '3', nameEn: 'Marketing', namePt: 'Marketing', slug: 'marketing', icon: '📈' },
  { id: '4', nameEn: 'Developer Tools', namePt: 'Ferramentas Dev', slug: 'dev-tools', icon: '💻' },
  { id: '5', nameEn: 'Design', namePt: 'Design', slug: 'design', icon: '🎨' },
  { id: '6', nameEn: 'SEO', namePt: 'SEO', slug: 'seo', icon: '🔍' },
  { id: '7', nameEn: 'Chatbots', namePt: 'Chatbots', slug: 'chatbots', icon: '💬' },
  { id: '8', nameEn: 'Social Media', namePt: 'Redes Sociais', slug: 'social-media', icon: '📱' },
  { id: '9', nameEn: 'Content Creation', namePt: 'Criação de Conteúdo', slug: 'content', icon: '✍️' },
  { id: '10', nameEn: 'No Code', namePt: 'No Code', slug: 'no-code', icon: '🏗️' },
  { id: '11', nameEn: 'Writing', namePt: 'Escrita', slug: 'writing', icon: '📝' },
  { id: '12', nameEn: 'Customer Support', namePt: 'Apoio ao Cliente', slug: 'support', icon: '🤝' },
  { id: '13', nameEn: 'Blogging', namePt: 'Blogging', slug: 'blogging', icon: '📰' },
  { id: '14', nameEn: 'Sales', namePt: 'Vendas', slug: 'sales', icon: '💰' },
  { id: '15', nameEn: 'Productized Services', namePt: 'Serviços de Produto', slug: 'services', icon: '📦' },
  { id: '16', nameEn: 'Website Builders', namePt: 'Criadores de Sites', slug: 'builders', icon: '🌐' },
  { id: '17', nameEn: 'Analytics', namePt: 'Analítica', slug: 'analytics', icon: '📊' },
  { id: '18', nameEn: 'iOS', namePt: 'iOS', slug: 'ios', icon: '🍎' },
  { id: '19', nameEn: 'Developer APIs', namePt: 'APIs para Devs', slug: 'apis', icon: '🔌' },
  { id: '20', nameEn: 'Video', namePt: 'Vídeo', slug: 'video', icon: '🎥' },
  { id: '21', nameEn: 'Building Products', namePt: 'Construção de Produto', slug: 'products', icon: '🚀' },
  { id: '22', nameEn: 'Mac', namePt: 'Mac', slug: 'mac', icon: '🖥️' },
  { id: '23', nameEn: 'Feedback Tools', namePt: 'Ferramentas de Feedback', slug: 'feedback', icon: '🗣️' },
  { id: '24', nameEn: 'Education', namePt: 'Educação', slug: 'education', icon: '🎓' },
  { id: '25', nameEn: 'Email', namePt: 'Email', slug: 'email', icon: '📧' },
];

const REAL_TOOLS: Partial<Tool>[] = [
  { name: 'ChatGPT', domain: 'openai.com', category: 'Chatbots', description: 'Conversational AI model by OpenAI.' },
  { name: 'Midjourney', domain: 'midjourney.com', category: 'Design', description: 'Text-to-image generation tool.' },
  { name: 'Jasper', domain: 'jasper.ai', category: 'Writing', description: 'AI copywriter for marketing content.' },
  { name: 'Notion AI', domain: 'notion.so', category: 'Productivity', description: 'AI-powered productivity workspace.' },
  { name: 'GitHub Copilot', domain: 'github.com', category: 'Developer Tools', description: 'AI pair programmer.' },
  { name: 'Canva', domain: 'canva.com', category: 'Design', description: 'Graphic design platform with AI magic.' },
  { name: 'Perplexity', domain: 'perplexity.ai', category: 'Artificial Intelligence', description: 'AI search engine.' },
  { name: 'Claude', domain: 'anthropic.com', category: 'Chatbots', description: 'Helpful and harmless AI assistant.' },
  { name: 'Runway', domain: 'runwayml.com', category: 'Video', description: 'AI video generation and editing.' },
  { name: 'Copy.ai', domain: 'copy.ai', category: 'Marketing', description: 'Generate high-quality copy in seconds.' },
  { name: 'Synthesia', domain: 'synthesia.io', category: 'Video', description: 'AI video creation platform.' },
  { name: 'Grammarly', domain: 'grammarly.com', category: 'Writing', description: 'AI writing assistance.' },
  { name: 'Beautiful.ai', domain: 'beautiful.ai', category: 'Design', description: 'Presentation software designed for everyone.' },
  { name: 'Zapier', domain: 'zapier.com', category: 'Productivity', description: 'Automation platform with AI integration.' },
  { name: 'Otter.ai', domain: 'otter.ai', category: 'Productivity', description: 'AI meeting notes and transcription.' },
  { name: 'Loom', domain: 'loom.com', category: 'Video', description: 'Video messaging for work.' },
  { name: 'Stable Diffusion', domain: 'stability.ai', category: 'Design', description: 'Latent text-to-image diffusion model.' },
  { name: 'Hugging Face', domain: 'huggingface.co', category: 'Developer Tools', description: 'The AI community building the future.' },
  { name: 'Writesonic', domain: 'writesonic.com', category: 'Writing', description: 'Best AI writer for SEO blogs.' },
  { name: 'Descript', domain: 'descript.com', category: 'Video', description: 'All-in-one video & audio editing.' },
  { name: 'ElevenLabs', domain: 'elevenlabs.io', category: 'Video', description: 'Realistic AI voice generator.' },
  { name: 'Framer', domain: 'framer.com', category: 'Website Builders', description: 'Design and publish your dream site.' },
  { name: 'Webflow', domain: 'webflow.com', category: 'Website Builders', description: 'Visual web development platform.' },
  { name: 'Bubble', domain: 'bubble.io', category: 'No Code', description: 'Build apps without code.' },
  { name: 'Make', domain: 'make.com', category: 'Productivity', description: 'Visual platform for automation.' },
  { name: 'Fireflies.ai', domain: 'fireflies.ai', category: 'Productivity', description: 'Automate meeting notes.' },
  { name: 'Surfer SEO', domain: 'surferseo.com', category: 'SEO', description: 'Rank your content with AI.' },
  { name: 'Semrush', domain: 'semrush.com', category: 'SEO', description: 'Online visibility management platform.' },
  { name: 'Intercom', domain: 'intercom.com', category: 'Customer Support', description: 'The only AI customer service solution.' },
  { name: 'Zendesk', domain: 'zendesk.com', category: 'Customer Support', description: 'Customer service software.' },
  { name: 'HubSpot', domain: 'hubspot.com', category: 'Sales', description: 'CRM platform with AI features.' },
  { name: 'Salesforce', domain: 'salesforce.com', category: 'Sales', description: 'Customer relationship management.' },
  { name: 'Gong', domain: 'gong.io', category: 'Sales', description: 'Revenue intelligence platform.' },
  { name: 'Lavender', domain: 'lavender.ai', category: 'Email', description: 'AI email sales coach.' },
  { name: 'Superhuman', domain: 'superhuman.com', category: 'Email', description: 'The fastest email experience ever made.' },
  { name: 'Duolingo', domain: 'duolingo.com', category: 'Education', description: 'Learn languages with AI.' },
  { name: 'Khan Academy', domain: 'khanacademy.org', category: 'Education', description: 'Free world-class education.' },
  { name: 'Coursera', domain: 'coursera.org', category: 'Education', description: 'Online learning platform.' },
  { name: 'Linear', domain: 'linear.app', category: 'Productivity', description: 'Issue tracking tool.' },
  { name: 'Raycast', domain: 'raycast.com', category: 'Mac', description: 'Blazingly fast, extendable launcher.' },
  { name: 'Arc', domain: 'arc.net', category: 'Productivity', description: 'The browser that browses for you.' },
  { name: 'Replit', domain: 'replit.com', category: 'Developer Tools', description: 'Collaborative browser-based IDE.' },
  { name: 'Vercel', domain: 'vercel.com', category: 'Developer Tools', description: 'Develop. Preview. Ship.' },
  { name: 'Supabase', domain: 'supabase.com', category: 'Developer Tools', description: 'Open source Firebase alternative.' },
  { name: 'Stripe', domain: 'stripe.com', category: 'Developer APIs', description: 'Financial infrastructure for the internet.' },
  { name: 'Algolia', domain: 'algolia.com', category: 'Developer APIs', description: 'Search and discovery API.' },
  { name: 'Twilio', domain: 'twilio.com', category: 'Developer APIs', description: 'Communication APIs.' },
  { name: 'Mixpanel', domain: 'mixpanel.com', category: 'Analytics', description: 'Product analytics for mobile and web.' },
  { name: 'Amplitude', domain: 'amplitude.com', category: 'Analytics', description: 'Digital analytics platform.' },
  { name: 'Google Analytics', domain: 'analytics.google.com', category: 'Analytics', description: 'Get to know your customers.' },
];

const ADJECTIVES = ['Super', 'Hyper', 'Mega', 'Auto', 'Smart', 'Quick', 'Deep', 'Neuro', 'Cyber', 'Tech', 'Meta', 'Omni', 'Pro', 'Fast', 'Easy', 'Zen', 'Flow', 'Bright', 'Clear', 'Bold'];
const NOUNS = ['Genius', 'Mind', 'Brain', 'Bot', 'Sync', 'Flow', 'Hub', 'Lab', 'Core', 'Base', 'Stack', 'Box', 'Kit', 'Pilot', 'Mate', 'Sense', 'Vision', 'Pulse', 'Wave', 'Sphere'];
const DOMAIN_SUFFIXES = ['.ai', '.io', '.com', '.app', '.co', '.net', '.org'];

export const generateTools = (): Tool[] => {
  const tools: Tool[] = [];
  const totalTools = 1000;

  // Add Real Tools First
  REAL_TOOLS.forEach((rt, index) => {
    tools.push({
      id: `real-${index}`,
      name: rt.name!,
      description: rt.description!,
      url: `https://${rt.domain}`,
      domain: rt.domain!,
      category: rt.category!,
      tags: ['Popular', 'Verified'],
      featured: index < 5,
      votes: Math.floor(Math.random() * 5000) + 1000,
      pricing: index % 3 === 0 ? 'Freemium' : index % 3 === 1 ? 'Paid' : 'Free'
    });
  });

  // Fill the rest
  for (let i = tools.length; i < totalTools; i++) {
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    const name = `${adj}${noun}`;
    const randomCat = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const domain = `${name.toLowerCase()}${DOMAIN_SUFFIXES[Math.floor(Math.random() * DOMAIN_SUFFIXES.length)]}`;
    
    tools.push({
      id: `gen-${i}`,
      name: `${name} AI`,
      description: `The ultimate AI-powered solution for ${randomCat.nameEn.toLowerCase()} workflows and automation.`,
      url: `https://${domain}`,
      domain: domain,
      category: randomCat.nameEn, // Storing internal English name for filtering consistency
      tags: Math.random() > 0.8 ? ['New', 'Deal'] : [],
      featured: false,
      votes: Math.floor(Math.random() * 900),
      pricing: Math.random() > 0.5 ? 'Freemium' : 'Paid'
    });
  }

  return tools;
};