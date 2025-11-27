export interface StaticExperiencePrice {
  id: string | number;
  title: string; // e.g., "2 People"
  value: string; // numeric string
  currency: string; // e.g., "GBP"
}

export interface StaticExperienceItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  prices?: StaticExperiencePrice[];
  url?: string; // official website if available
  timeSlots?: string[]; // optional static time slots
  availableDates?: string[]; // ISO date strings for availability
}

// Basic placeholder image helper
const img = (seed: number) => `https://images.pexels.com/photos/159711${seed % 6 + 1}/pexels-photo-159711${seed % 6 + 1}.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop`;

export const staticExperiences: StaticExperienceItem[] = [
  {
    id: 'diamond-experience',
    title: 'Diamond Experience',
    description:
      'Private Yacht Charter + Champagne + Drinks and Snacks + Whales and Dolphins + Paddle Boards. 3 Excursions, Events, or Activities of Your Choosing. Free Luxury Transfer Between Excursions, Events, or Activities + Airport Pick-up & Drop-off + Mini Bar Included. Want your experiences professionally filmed and potentially used on our social media? (Free with Diamond Package)',
    images: ['/assets/images/diamond_experience.jpg'],
    prices: [
      { id: 'd-2', title: '2 People', value: '1400', currency: '£' },
      { id: 'd-4', title: '4 People', value: '2040', currency: '£' },
      { id: 'd-6', title: '6 People', value: '2820', currency: '£' },
    ],
    timeSlots: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM', '5:00 PM - 8:00 PM', '8:00 PM - 11:00 PM'],
    // Next 14 days from today
    availableDates: Array.from({ length: 14 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      d.setHours(0,0,0,0);
      return d.toISOString().slice(0,10);
    }),
  },
  {
    id: 'gold-experience',
    title: 'Gold Experience',
    description:
      'Private Charter + Champagne + Whales and Dolphins + Drinks and Snacks. 3 Excursions, Events, or Activities of Your Choosing. Free Luxury Transfer Between Every Excursion, Event, or Activity. Want your experiences professionally filmed and potentially used on our social media?',
    images: ['/assets/images/gold_experience.jpeg'],
    prices: [
      { id: 'g-2', title: '2 People', value: '1120', currency: '£' },
      { id: 'g-4', title: '4 People', value: '1880', currency: '£' },
      { id: 'g-6', title: '6 People', value: '2520', currency: '£' },
    ],
    timeSlots: ['10:00 AM - 1:00 PM', '3:00 PM - 6:00 PM', '6:00 PM - 9:00 PM'],
    availableDates: Array.from({ length: 14 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      d.setHours(0,0,0,0);
      return d.toISOString().slice(0,10);
    }),
  },
  {
    id: 'silver-experience',
    title: 'Silver Experience',
    description:
      '3 Excursions, Events, or Activities of Your Choosing. Free Luxury Transfer Between Every Excursion, Event, or Activity. Want your experiences professionally filmed and potentially used on our social media?',
    images: ['/assets/images/silver_experience.jpg'],
    prices: [
      { id: 's-2', title: '2 People', value: '680', currency: '£' },
      { id: 's-4', title: '4 People', value: '1360', currency: '£' },
      { id: 's-6', title: '6 People', value: '2040', currency: '£' },
    ],
    timeSlots: ['11:00 AM - 2:00 PM', '4:00 PM - 7:00 PM', '7:00 PM - 10:00 PM'],
    availableDates: Array.from({ length: 14 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      d.setHours(0,0,0,0);
      return d.toISOString().slice(0,10);
    }),
  },
  {
    id: 'party-experience',
    title: 'Party Experience',
    description:
      '1 Excursion, Event, or Activity of Your Choosing. Boat Party. Pool Party. Luxury Transfer Between Excursions, Events, or Activities.',
    images: ['/assets/images/party_experience.jpg'],
    prices: [
      { id: 'p-2', title: '2 People', value: '500', currency: '£' },
      { id: 'p-4', title: '4 People', value: '1000', currency: '£' },
      { id: 'p-6', title: '6 People', value: '1500', currency: '£' },
    ],
    timeSlots: ['10:00 AM - 1:00 PM', '2:00 PM - 5:00 PM', '5:00 PM - 8:00 PM', '8:00 PM - 11:00 PM'],
    availableDates: Array.from({ length: 14 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i);
      d.setHours(0,0,0,0);
      return d.toISOString().slice(0,10);
    }),
  },
  { id: 'sunset-stargazing', title: 'Sunset and Stargazing', description: 'Experience a breathtaking sunset followed by stargazing under clear Tenerife skies.', images: [img(1)] },
  { id: 'jet-ski', title: 'Jet Ski', description: 'Ride the waves and explore the coastline on a thrilling jet ski adventure.', images: [img(2)] },
  { id: 'sports-fishing', title: 'Sports Fishing', description: 'Offshore sports fishing for an unforgettable day at sea.', images: [img(3)] },
  { id: 'helicopter', title: 'Helicopter Experience', description: 'Soar above Tenerife and capture stunning aerial views.', images: [img(4)] },
  { id: 'buggy', title: 'Buggy', description: 'Off-road buggy tour through scenic routes and rugged terrain.', images: [img(5)] },
  { id: 'paragliding', title: 'Paragliding', description: 'Glide over volcanic landscapes with experienced pilots.', images: [img(6)] },
  { id: 'go-karting', title: 'Go Karting', description: 'Challenge friends on a high-speed karting circuit.', images: [img(7)] },
  { id: 'scuba-diving', title: 'Scuba Diving', description: 'Discover underwater life in crystal-clear waters.', images: [img(8)] },
  { id: 'parasailing', title: 'Parasailing', description: 'Take to the skies above the ocean for panoramic views.', images: [img(9)] },
  { id: 'quad-tour', title: 'Quad Tour', description: 'Explore off-road trails on a powerful quad.', images: [img(10)] },
  { id: 'kayaking', title: 'Kayaking', description: 'Paddle along the coastline and discover hidden coves.', images: [img(11)] },
  { id: 'f1-simulator', title: 'F1 Simulator', description: 'Feel the speed in a realistic F1 simulator experience.', images: [img(12)] },
  // With specific websites
  { id: 'siam-park', title: 'Siam Park', description: 'Europe’s best water park. Book directly on their official site.', images: [img(13)], url: 'https://siampark.net/es/' },
  { id: 'loro-parque', title: 'Loro Parque', description: 'World-famous animal adventure park in Tenerife.', images: [img(14)], url: 'https://www.loroparque.com' },
  { id: 'jungle-park', title: 'Jungle Park', description: 'Jungle-themed park with shows and attractions.', images: [img(15)], url: 'https://tickets.junglepark.es/?lang=en' },
  { id: 'scandal', title: 'Scandal', description: 'Dinner show experience. View tickets on their official site.', images: [img(16)], url: 'https://scandaldinnershow.com/?' },
  { id: 'medieval', title: 'Medieval', description: 'Medieval adventure show. Official tickets on their site.', images: [img(17)], url: 'https://medievaladventure.com' },
  { id: 'history-of-music', title: 'History of Music', description: 'A spectacular musical journey. See official site for details.', images: [img(18)], url: 'https://historytheshow.com' },
  { id: 'utopia-boat-party', title: 'Utopia Boat Party', description: 'Legendary boat party in Tenerife. Official bookings available.', images: [img(19)], url: 'https://utopiaparties.com/boat-party/' },
  { id: 'monkey-beach', title: 'Monkey Beach', description: 'Beach club events and reservations on their official site.', images: [img(20)], url: 'https://www.monkeybeachclub.com/en' },
];


