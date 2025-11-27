export type PackageTier = 'Diamond' | 'Gold' | 'Silver' | 'Party';

export interface PriceRow {
  people: number;
  pricePerPerson: number;
  total: number;
  netPerPerson: number;
  profit: number;
}

export interface ExperiencePackage {
  tier: PackageTier;
  excursionsIncluded: number;
  headline: string[];
  extras: string[];
  note?: string;
  prices: PriceRow[];
}

export interface ExperienceOption {
  id: string;
  name: string;
  url?: string;
}

export const options: ExperienceOption[] = [
  { id: 'sunset-stargazing', name: 'Sunset and Stargazing' },
  { id: 'jet-ski', name: 'Jet Ski' },
  { id: 'sports-fishing', name: 'Sports Fishing' },
  { id: 'helicopter', name: 'Helicopter Experience' },
  { id: 'buggy', name: 'Buggy' },
  { id: 'paragliding', name: 'Paragliding' },
  { id: 'go-karting', name: 'Go Karting' },
  { id: 'scuba-diving', name: 'Scuba Diving' },
  { id: 'parasailing', name: 'Parasailing' },
  { id: 'quad-tour', name: 'Quad Tour' },
  { id: 'kayaking', name: 'Kayaking' },
  { id: 'f1-simulator', name: 'F1 Simulator' },
  { id: 'siam-park', name: 'Siam Park', url: 'https://siampark.net/es/' },
  { id: 'loro-parque', name: 'Loro Parque', url: 'https://www.loroparque.com' },
  { id: 'jungle-park', name: 'Jungle Park', url: 'https://tickets.junglepark.es/?lang=en' },
  { id: 'scandal', name: 'Scandal', url: 'https://scandaldinnershow.com/?' },
  { id: 'medieval', name: 'Medieval', url: 'https://medievaladventure.com' },
  { id: 'history-of-music', name: 'History of Music', url: 'https://historytheshow.com' },
  { id: 'utopia-boat-party', name: 'Utopia Boat Party', url: 'https://utopiaparties.com/boat-party/' },
  { id: 'monkey-beach', name: 'Monkey Beach', url: 'https://www.monkeybeachclub.com/en' },
];


