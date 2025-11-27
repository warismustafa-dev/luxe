// TypeScript type for the experience prop
export interface ExperiencePrice {
  id: number | string;
  title: string;
  value: string;
  currency: string;
}

export interface ExperienceDetailProps {
  experience: {
    id: string;
    title: string;
    description: string;
    location: string;
    images: string[];
    highlights: string[];
    bring: string;
    advice: string;
    voucher_checkout_url?: string;
    prices: ExperiencePrice[];
  };
}