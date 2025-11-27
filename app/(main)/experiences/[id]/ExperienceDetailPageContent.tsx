import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { toast } from '@/hooks/use-toast';
import { options as optionData } from '@/components/experiences/data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { ExperienceDetailProps, ExperiencePrice } from '@/types/experience';
import routes from '@/lib/routes';
import { Calendar } from '@/components/ui/calendar';
import { staticExperiences } from '@/components/experiences/static-experiences';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, CalendarDays, Clock } from 'lucide-react';




// Business rules per experience tier
const EXPERIENCE_RULES: Record<string, { requiredSelections: number; tierLabel: string }> = {
  'diamond-experience': { requiredSelections: 3, tierLabel: 'Diamond Experience' },
  'gold-experience': { requiredSelections: 3, tierLabel: 'Gold Experience' },
  'silver-experience': { requiredSelections: 3, tierLabel: 'Silver Experience' },
  'party-experience': { requiredSelections: 1, tierLabel: 'Party Experience' },
};

const ExperienceDetailPageContent: React.FC<ExperienceDetailProps> = ({ experience }) => {
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState<ExperiencePrice>(experience.prices[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [arrivalTime, setArrivalTime] = useState<string | undefined>(undefined);
  const [departureTime, setDepartureTime] = useState<string | undefined>(undefined);
  const [includeTransfer, setIncludeTransfer] = useState<boolean>(experience.id === 'diamond-experience');
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const rules = EXPERIENCE_RULES[experience.id] || { requiredSelections: 3, tierLabel: experience.title };
  const requiredSelections = rules.requiredSelections;
  const isDiamond = experience.id === 'diamond-experience';

  // Calculate the 3 days from start date
  const calculatedDays = useMemo(() => {
    if (!startDate) return [];
    const days = [];
    for (let i = 0; i < 3; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  }, [startDate]);

  const peopleOptions = useMemo(() => {
    const map: { count: number; price: ExperiencePrice }[] = [];
    const seen = new Set<number>();
    for (const p of experience.prices) {
      const match = String(p.title).match(/\d+/);
      if (match) {
        const count = parseInt(match[0], 10);
        if (!seen.has(count)) {
          seen.add(count);
          map.push({ count, price: p });
        }
      }
    }
    return map.sort((a, b) => a.count - b.count);
  }, [experience.prices]);

  const selectedPeople = useMemo(() => {
    const m = String(selectedPrice.title).match(/\d+/);
    return m ? parseInt(m[0], 10) : undefined;
  }, [selectedPrice]);

  const handleBookNow = () => {
    if (selectedOptions.length < requiredSelections) {
      const plural = requiredSelections === 1 ? 'option' : 'options';
      toast({
        title: `Please select ${requiredSelections} ${plural}`,
        description: `Choose ${requiredSelections} Excursions/Products before booking.`,
      });
      return;
    }
    if (!startDate || !arrivalTime || !departureTime) {
      setScheduleOpen(true);
      return;
    }
    const peopleParam = selectedPeople ? `&people=${selectedPeople}` : '';
    const selectedParam = selectedOptions.length ? `&selected=${encodeURIComponent(selectedOptions.join(','))}` : '';
    const startDateParam = `&startDate=${encodeURIComponent(startDate.toISOString().slice(0,10))}`;
    const arrivalParam = `&arrivalTime=${encodeURIComponent(arrivalTime)}`;
    const departureParam = `&departureTime=${encodeURIComponent(departureTime)}`;
    const transferParam = `&transfer=${includeTransfer ? 'true' : 'false'}`;
    router.push(`/booking-details?experienceId=${experience.id}&priceId=${selectedPrice.id}${peopleParam}${selectedParam}${startDateParam}${arrivalParam}${departureParam}${transferParam}`);
  };

  return (
    <div className="min-h-screen bg-luxe-black text-white">
      <div className="max-w-7xl mx-auto container-padding py-8">
        {/* Hero Image with overlay */}
      <div className="relative rounded-luxe-2xl overflow-hidden shadow-2xl mb-8 group">
        <img
          src={experience.images[0]}
          alt={experience.title}
          className="w-full h-56 sm:h-72 md:h-96 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 flex flex-col justify-end p-6">
          <h1 className="luxe-heading-1 text-white drop-shadow-lg mb-2">
            {experience.title}
          </h1>
          <div className="flex items-center text-white/90 text-base mb-2">
            <span className="mr-2">
              <img src="/assets/images/Location-Filled.svg" alt="location" />
            </span>
            <span>{experience.location}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.highlights.map((h, i) => (
              <Badge
                key={i}
                className="bg-luxe-gold text-black font-medium rounded-full px-3 py-1 text-xs shadow hover:bg-luxe-gold-dark transition"
              >
                {h}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-8 transition-all duration-700">
        <div className="bg-white text-luxe-gray-dark rounded-luxe-xl p-6 md:p-8 shadow-lg description">
          <div
            className="prose prose-lg max-w-none text-luxe-gray-dark"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        </div>
      </section>

      {/* Selection Status */}
      <section className="mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-luxe-xl p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <CheckCircle className={`h-4 w-4 ${selectedOptions.length >= requiredSelections ? 'text-emerald-400' : 'text-gray-500'}`} />
              Selected: {selectedOptions.length}/{requiredSelections}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <CalendarDays className={`h-4 w-4 ${startDate ? 'text-emerald-400' : 'text-gray-500'}`} />
              {startDate ? `${calculatedDays.length} days starting ${startDate.toDateString()}` : 'No date selected'}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <Clock className={`h-4 w-4 ${arrivalTime && departureTime ? 'text-emerald-400' : 'text-gray-500'}`} />
              {arrivalTime && departureTime ? `${arrivalTime} - ${departureTime}` : 'No times'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setScheduleOpen(true)} variant="luxe">
              Select Date & Time
            </Button>
          </div>
        </div>
      </section>

      {/* Availability - Date & Time Modal */}
      <Dialog open={scheduleOpen} onOpenChange={setScheduleOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Select Date & Times</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <span className="luxe-text-body-small text-gray-500">Start Date (3 days will be selected automatically)</span>
              <div className="border rounded-md p-2">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(d) => { setStartDate(d); }}
                  disabled={(day) => {
                    const exp = staticExperiences.find(e => e.id === experience.id);
                    const iso = new Date(day.getFullYear(), day.getMonth(), day.getDate()).toISOString().slice(0,10);
                    const allowed = exp?.availableDates || [];
                    return !allowed.includes(iso);
                  }}
                  className="rounded-md"
                />
              </div>
              {startDate && calculatedDays.length > 0 && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm font-medium text-luxe-black mb-2">Selected Days:</p>
                  <ul className="luxe-text-body-small text-gray-500 space-y-1">
                    {calculatedDays.map((day, idx) => (
                      <li key={idx}>Day {idx + 1}: {day.toDateString()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="luxe-text-body-small text-gray-500">Arrival Time (Airport Pick-up)</span>
                <div className="flex flex-wrap gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'].map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setArrivalTime(slot)}
                      disabled={!startDate}
                      className={`px-3 py-2 rounded-luxe-md border text-sm transition ${arrivalTime === slot ? 'bg-luxe-gold text-black border-luxe-gold' : 'bg-white text-luxe-black border-gray-300 hover:bg-gray-50'} ${!startDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >{slot}</button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="luxe-text-body-small text-gray-500">Departure Time (Airport Drop-off)</span>
                <div className="flex flex-wrap gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDepartureTime(slot)}
                      disabled={!startDate}
                      className={`px-3 py-2 rounded-luxe-md border text-sm transition ${departureTime === slot ? 'bg-luxe-gold text-black border-luxe-gold' : 'bg-white text-luxe-black border-gray-300 hover:bg-gray-50'} ${!startDate ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >{slot}</button>
                  ))}
                </div>
              </div>
              {startDate && arrivalTime && departureTime && (
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-luxe-black">Selected: {startDate.toDateString()} • Arrival: {arrivalTime} • Departure: {departureTime}</p>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                if (!startDate || !arrivalTime || !departureTime) return;
                setScheduleOpen(false);
                toast({ title: 'Schedule saved', description: 'Date & times selected for booking.' });
              }}
              disabled={!startDate || !arrivalTime || !departureTime}
              variant="luxe"
            >
              Save & Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Two-column: left adventures, right participants + CTA */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left column */}
        <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-5 md:p-6 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="luxe-heading-3 text-white">Choose Your Adventures</h2>
            <span className="text-xs md:text-sm text-gray-300">
              {requiredSelections === 1 ? 'Select 1 option' : `Select ${requiredSelections} options`}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {optionData.map((opt) => {
              const isSelected = selectedOptions.includes(opt.id);
              const disabled = !isSelected && selectedOptions.length >= requiredSelections;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedOptions((prev) => {
                      if (prev.includes(opt.id)) return prev.filter((x) => x !== opt.id);
                      if (prev.length >= requiredSelections) return prev;
                      return [...prev, opt.id];
                    });
                  }}
                  disabled={disabled}
                  className={`group border rounded-luxe-md p-3 text-left flex items-center gap-3 hover:shadow-md transition bg-black/50 backdrop-blur-sm ${
                    isSelected ? 'ring-2 ring-luxe-gold border-luxe-gold bg-black/80' : 'border-white/15'
                  } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-luxe-gold'}`} />
                  <div className="flex-1 min-w-0">
                    <span className="luxe-text-body-small text-white line-clamp-2">{opt.name}</span>
                  </div>
                  {opt.url && (
                    <a
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-luxe-gold underline shrink-0 hover:text-white"
                    >
                      Open
                    </a>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-5 md:p-6 backdrop-blur-md">
          <h2 className="luxe-heading-3 text-white mb-4">Select Participants</h2>
          {peopleOptions.length > 0 ? (
            <div className="flex flex-wrap gap-3 mb-4">
              {peopleOptions.map(({ count, price }) => (
                <button
                  key={String(price.id)}
                  className={`rounded-luxe-md px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/60 focus:ring-offset-0 ${
                    selectedPrice.id === price.id
                      ? 'bg-luxe-gold text-black border-luxe-gold shadow-lg scale-105'
                      : 'bg-black/60 text-luxe-gold border-luxe-gold/40 hover:bg-black'
                  }`}
                  onClick={() => setSelectedPrice(price)}
                  type="button"
                >
                  {count} {count === 1 ? 'Person' : 'People'}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 mb-4">
              {experience.prices.map((price) => (
                <button
                  key={price.id}
                  className={`rounded-luxe-md px-5 py-2 font-medium border transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-luxe-gold/60 focus:ring-offset-0 ${
                    selectedPrice.id === price.id
                      ? 'bg-luxe-gold text-black border-luxe-gold shadow-lg scale-105'
                      : 'bg-black/60 text-luxe-gold border-luxe-gold/40 hover:bg-black'
                  }`}
                  onClick={() => setSelectedPrice(price)}
                  type="button"
                >
                  {price.title}
                </button>
              ))}
            </div>
          )}
          <div className="space-y-3 mb-4">
            <div className="text-lg font-bold text-luxe-gold">
              Price: {selectedPrice.currency}{' '}
              {Number(selectedPrice.value).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="airport-transfer"
                checked={includeTransfer}
                disabled={isDiamond}
                onChange={(e) => {
                  if (isDiamond) return;
                  setIncludeTransfer(e.target.checked);
                }}
                className="w-4 h-4 text-luxe-gold border-gray-500 rounded focus:ring-luxe-gold disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <label htmlFor="airport-transfer" className="text-sm text-white cursor-pointer">
                Airport Pick-up &amp; Drop-off
                {experience.id === 'diamond-experience' ? (
                  <span className="text-luxe-gold ml-1">(Included)</span>
                ) : (
                  <span className="text-gray-300 ml-1">(+ £150)</span>
                )}
              </label>
            </div>
            {includeTransfer && experience.id !== 'diamond-experience' && (
              <div className="text-sm font-semibold text-luxe-gold">
                Total: {selectedPrice.currency}{' '}
                {(Number(selectedPrice.value) + 150).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            )}
          </div>
          <Button
            size="lg"
            className="w-full bg-luxe-gold hover:bg-white text-black text-lg font-semibold px-10 py-4 rounded-luxe-lg shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleBookNow}
            disabled={selectedOptions.length < requiredSelections}
          >
            Book Now
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ExperienceDetailPageContent;