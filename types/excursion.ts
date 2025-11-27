// Excursion related types
export interface Excursion {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  maxGuests: number;
  availableDates: string[];
  location: string;
  images: string[];
  category: string;
  difficulty: 'easy' | 'moderate' | 'hard';
  included: string[];
  excluded: string[];
  requirements: string[];
  highlights: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ExcursionCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface ExcursionSearchParams {
  location?: string;
  date?: string;
  guests?: number;
  priceRange?: string;
  category?: string;
  difficulty?: 'easy' | 'moderate' | 'hard';
  duration?: string;
} 