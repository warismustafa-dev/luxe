'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import routes from '@/lib/routes';
import { staticExperiences } from '@/components/experiences/static-experiences';
import { getMediaUrl } from '@/lib/utils';

interface EventLike {
  id: string;
  title: string;
  description: string;
  images: string[];
  url?: string;
  prices?: { value: string; currency: string }[];
}

// Video mapping for experience packages
const experienceVideoMap: Record<string, { desktop: string; mobile: string }> = {
  'diamond-experience': {
    desktop: getMediaUrl('/assets/videos/Diamond Experience 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Diamond Experience 9-16 - Final Video.mp4')
  },
  'gold-experience': {
    desktop: getMediaUrl('/assets/videos/Gold Experience 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Gold Experience 9-16 - Final Video.mp4')
  },
  'silver-experience': {
    desktop: getMediaUrl('/assets/videos/Silver Experience 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Silver Experience 9-16 - Final Video.mp4')
  },
  'party-experience': {
    desktop: getMediaUrl('/assets/videos/Party Experience 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Party Experience 9-16 - Final Video.mp4')
  }
};

const Experiences = () => {
  const [events, setEvents] = useState<EventLike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use local static dataset instead of API - include party experience
      const allowed = new Set(['diamond-experience', 'gold-experience', 'silver-experience', 'party-experience']);
      setEvents(staticExperiences.filter((e) => allowed.has(e.id)) as any);
    } catch (err: any) {
      setError('Failed to load experiences.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
      </div>
    );
  }

  // Only show error if there is an error and no events loaded
  if (error && (!events || events.length === 0)) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  // Show 'No events found.' only if not loading, not error, and events is empty
  if (!error && events.length === 0) {
    return <div className="text-gray-500 col-span-full">No events found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 section-gap">
        {events.map((event, idx) => {
          const videoSources = experienceVideoMap[event.id];
          const posterImage = event.images?.[0] || `https://images.pexels.com/photos/159711${(idx % 6) + 1}/pexels-photo-159711${(idx % 6) + 1}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`;

          return (
            <div
              key={event.id || idx}
              className="group relative rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl h-[320px] md:h-[380px]"
            >
              {/* Media background */}
              <div className="absolute inset-0 bg-gray-200">
                {videoSources ? (
                  <>
                    {/* Desktop Video (16:9) */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="hidden md:block absolute inset-0 w-full h-full object-cover"
                      poster={posterImage}
                    >
                      <source src={videoSources.desktop} type="video/mp4" />
                    </video>
                    {/* Mobile Video (9:16) */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="md:hidden absolute inset-0 w-full h-full object-cover"
                      poster={posterImage}
                    >
                      <source src={videoSources.mobile} type="video/mp4" />
                    </video>
                  </>
                ) : (
                  <img
                    src={posterImage}
                    alt={event.title || `Experience ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {/* Subtle base overlay, stronger on hover for text readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content glass card - always visible, emphasized on hover */}
              <div className="relative z-10 flex items-end h-full pointer-events-none">
                <div className="w-[92%] mx-auto mb-4 bg-black/60 group-hover:bg-black/80 backdrop-blur-md rounded-luxe-xl px-5 py-4 flex flex-col gap-3 transition-all duration-300 border border-white/10 pointer-events-auto">
                  <div>
                    <h3 className="luxe-heading-3 text-white mb-1 line-clamp-1">{event.title}</h3>
                    <p className="luxe-text-body-small text-white/90 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-luxe-gold font-bold text-lg">
                      {Array.isArray(event.prices) && event.prices?.length
                        ? `From ${event.prices[0].currency} ${Math.min(
                            ...event.prices.map((p) => parseFloat(p.value))
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : 'Price varies'}
                    </span>
                    {event.url ? (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <Button variant="luxe-outline" className="text-xs px-4 py-2 h-9">
                          Official
                        </Button>
                      </a>
                    ) : (
                      <Link href={`${routes.ui.experiences}/${event.id}`} className="shrink-0">
                        <Button variant="luxe" className="text-xs px-4 py-2 h-9">
                          View Details
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;