"use client";
import React, { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { options } from '@/components/experiences/data';
import { Button } from '@/components/ui/button';

const MAX_SELECTION = 3;

const PlannerPage: React.FC = () => {
  const router = useRouter();
  const search = useSearchParams();
  const preselected = useMemo(() => (search.get('selected') || '').split(',').filter(Boolean), [search]);
  const presetPeople = Number(search.get('people') || '0');

  const [selected, setSelected] = useState<string[]>(preselected);
  const [people, setPeople] = useState<number>(presetPeople > 0 ? presetPeople : 2);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= MAX_SELECTION) return prev;
      return [...prev, id];
    });
  };

  const proceed = () => {
    const selectedParam = encodeURIComponent(selected.join(','));
    router.push(`/booking-details?selected=${selectedParam}&people=${people}`);
  };

  return (
    <div className="max-w-7xl mx-auto container-padding py-10">
      <h1 className="luxe-heading-2 text-luxe-gray-dark mb-2">Plan Your Experience</h1>
      <p className="luxe-text-body text-gray-600 mb-2">
        Step 1: Select the excursions, events, or activities you&apos;re most interested in and choose your group size.
      </p>
      <p className="luxe-text-body-small text-gray-500 mb-6">
        You&apos;ll pick exact dates, times, and airport transfer options on the next screens.
      </p>

      <div className="flex items-center gap-3 mb-6">
        <label htmlFor="peopleCount" className="luxe-text-body-small text-gray-700">People</label>
        <input
          type="number"
          min={1}
          max={12}
          value={people}
          id="peopleCount"
          aria-label="Number of people"
          placeholder="2"
          onChange={(e) => setPeople(Math.max(1, Math.min(12, Number(e.target.value) || 1)))}
          className="w-24 border rounded-luxe-md px-3 py-2"
        />
        <span className="text-xs text-gray-500">You can adjust later.</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {options.map((opt) => {
          const isSelected = selected.includes(opt.id);
          const disabled = !isSelected && selected.length >= MAX_SELECTION;
          return (
            <button
              key={opt.id}
              onClick={() => toggle(opt.id)}
              disabled={disabled}
              className={`border rounded-luxe-xl p-3 text-left transition bg-white hover:shadow-md ${
                isSelected ? 'ring-2 ring-luxe-gold border-luxe-gold' : ''
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="text-sm font-medium text-luxe-gray-dark line-clamp-2">{opt.name}</div>
              {opt.url && (
                <span className="text-xs text-luxe-gold">Official site available</span>
              )}
              <div className="mt-2 text-xs text-gray-500">{isSelected ? 'Selected' : 'Tap to select'}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="luxe-text-body-small text-gray-600">Selected: {selected.length}/{MAX_SELECTION}</div>
        <Button onClick={proceed} disabled={selected.length === 0} variant="luxe">
          Continue to Booking Details
        </Button>
      </div>
    </div>
  );
};

export default PlannerPage;


