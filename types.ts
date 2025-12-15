export type Language = 'en' | 'pt';

export interface Tool {
  id: string;
  name: string;
  description: string; // Current description (localized dynamically if possible, or static)
  url: string;
  domain: string;
  category: string;
  tags: string[];
  featured: boolean;
  votes: number;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Trial';
}

export interface Category {
  id: string;
  nameEn: string;
  namePt: string;
  slug: string;
  icon: string;
}

export enum SortOption {
  POPULAR = 'Popular',
  NEWEST = 'Newest',
  NAME = 'Name'
}