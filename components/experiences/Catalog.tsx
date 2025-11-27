"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { options as optionData } from './data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type PackageTier = 'Diamond' | 'Gold' | 'Silver' | 'Party';

interface PriceRow {
  people: number;
  pricePerPerson: number;
  total: number;
  netPerPerson: number;
  profit: number;
}

interface ExperiencePackage {
  tier: PackageTier;
  excursionsIncluded: number;
  headline: string[];
  extras: string[];
  note?: string;
  prices: PriceRow[];
}

interface ExperienceOption {
  id: string;
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const tiers: ExperiencePackage[] = [
  {
    tier: 'Diamond',
    excursionsIncluded: 4,
    headline: [
      'Private Yacht Charter + Champagne + Drinks and Snacks + Whales and Dolphins + Paddle Boards',
    ],
    extras: [
      '3 Excursions, Events, or Activities of Your Choosing',
      'Free Luxury Transfer Between Excursions, Events, or Activities + Airport Pick-up & Drop-off + Mini Bar Included',
    ],
    note:
      'Want your experiences professionally filmed and potentially used on our social media? (Free with Diamond Package)',
    prices: [
      { people: 2, pricePerPerson: 700, total: 1400, netPerPerson: 470, profit: 460 },
      { people: 4, pricePerPerson: 510, total: 2040, netPerPerson: 310, profit: 800 },
      { people: 6, pricePerPerson: 470, total: 2820, netPerPerson: 260, profit: 1260 },
    ],
  },
  {
    tier: 'Gold',
    excursionsIncluded: 4,
    headline: [
      'Private Charter + Champagne + Whales and Dolphins + Drinks and Snacks',
    ],
    extras: [
      '3 Excursions, Events, or Activities of Your Choosing',
      'Free Luxury Transfer Between Every Excursion, Event, or Activity',
    ],
    note:
      'Want your experiences professionally filmed and potentially used on our social media?',
    prices: [
      { people: 2, pricePerPerson: 560, total: 1120, netPerPerson: 355, profit: 410 },
      { people: 4, pricePerPerson: 470, total: 1880, netPerPerson: 250, profit: 880 },
      { people: 6, pricePerPerson: 420, total: 2520, netPerPerson: 220, profit: 1200 },
    ],
  },
  {
    tier: 'Silver',
    excursionsIncluded: 3,
    headline: ['3 Excursions, Events, or Activities of Your Choosing'],
    extras: [
      'Free Luxury Transfer Between Every Excursion, Event, or Activity',
    ],
    note:
      'Want your experiences professionally filmed and potentially used on our social media?',
    prices: [
      { people: 2, pricePerPerson: 340, total: 680, netPerPerson: 150, profit: 380 },
      { people: 4, pricePerPerson: 340, total: 1360, netPerPerson: 150, profit: 760 },
      { people: 6, pricePerPerson: 340, total: 2040, netPerPerson: 150, profit: 1140 },
    ],
  },
  {
    tier: 'Party',
    excursionsIncluded: 1,
    headline: ['1 Excursion, Event, or Activity of Your Choosing'],
    extras: [
      'Boat Party',
      'Pool Party',
      'Luxury Transfer Between Excursions, Events, or Activities',
    ],
    prices: [
      { people: 2, pricePerPerson: 250, total: 500, netPerPerson: 100, profit: 300 },
      { people: 4, pricePerPerson: 250, total: 1000, netPerPerson: 100, profit: 600 },
      { people: 6, pricePerPerson: 250, total: 1500, netPerPerson: 100, profit: 900 },
    ],
  },
];

const iconClass = 'w-6 h-6';

const options: ExperienceOption[] = optionData.map((o) => ({ ...o, icon: (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
)}));

const currency = '£';

const Catalog: React.FC = () => {
  const router = useRouter();
  const goPlan = (optId?: string) => {
    if (optId) {
      router.push(`/experiences/planner?selected=${encodeURIComponent(optId)}`);
    } else {
      router.push('/experiences/planner');
    }
  };
  return (
    <div className="max-w-7xl mx-auto container-padding py-10">
      <h2 className="luxe-heading-2 text-luxe-gray-dark mb-6">Experience Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 section-gap mb-10">
        {tiers.map((t) => (
          <Card key={t.tier} className="rounded-luxe-2xl border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                <span className="text-luxe-gray-dark">{t.tier} Experience</span>
                <span className="text-sm text-luxe-gold font-semibold">{t.excursionsIncluded} Excursions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4 text-sm text-gray-700">
                {t.headline.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-luxe-gold mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 mb-4 text-sm text-gray-700">
                {t.extras.map((e, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-luxe-gold mt-1">•</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              {t.note && (
                <div className="text-xs text-gray-500 mb-4">{t.note}</div>
              )}
              <div className="space-y-2 mb-4">
                {t.prices.map((p) => (
                  <div key={p.people} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{p.people} people</span>
                    <span className="text-luxe-gray-dark font-semibold">
                      {currency}
                      {p.pricePerPerson.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                      <span className="text-gray-500 font-normal"> pp</span>
                    </span>
                  </div>
                ))}
              </div>
              <Button onClick={() => goPlan()} variant="luxe" className="w-full">Choose {t.tier}</Button>
            </CardContent>
          </Card>
        ))}
        {/* Custom Experience Card */}
        <Card className="rounded-2xl border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-baseline justify-between">
              <span className="text-luxe-gray-dark">Custom Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-4">
              Tailor your experiences with us. Select the number of people in your group and exactly what you want to do, and we will generate a unique package just for you.
            </p>
            <Button onClick={() => goPlan()} variant="luxe" className="w-full">Create Custom Package</Button>
          </CardContent>
        </Card>
      </div>

      <h3 className="luxe-heading-3 text-luxe-gray-dark mb-4">Excursion / Product / Experience options</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {options.map((opt) => (
          <div key={opt.id} className="group border rounded-luxe-xl p-3 flex items-center gap-3 hover:shadow-md transition bg-white">
            <div className="text-luxe-gold">
              {opt.icon}
            </div>
            <div className="flex-1 min-w-0">
              {opt.url ? (
                <Link href={opt.url} target="_blank" className="text-sm font-medium text-luxe-gray-dark hover:underline line-clamp-2">
                  {opt.name}
                </Link>
              ) : (
                <button onClick={() => goPlan(opt.id)} className="text-left text-sm font-medium text-luxe-gray-dark hover:underline line-clamp-2">{opt.name}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;


