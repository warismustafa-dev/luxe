'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import routes from "@/lib/routes";
import { getMediaUrl } from '@/lib/utils';

// Video mapping for activities
const activityVideoMap: Record<string, { desktop: string; mobile: string }> = {
  'sunset-stargazing': {
    desktop: getMediaUrl('/assets/videos/Tenerife Stars 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Tenerife Stars 9-16 - Final Video.mp4'),
  },
  'jet-ski': {
    desktop: getMediaUrl('/assets/videos/Extreme Jet Ski 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/Extreme Jet Ski 9-16 - Final Video.mp4'),
  },
  'buggy': {
    desktop: getMediaUrl('/assets/videos/King Buggy 16-9 - Final Video.mp4'),
    mobile: getMediaUrl('/assets/videos/King Buggy 9-16 - Final Video.mp4'),
  },
};

// Activity/Excursion data with images, videos, and descriptions
const activitiesData = [
  {
    id: 'sunset-stargazing',
    name: 'Sunset and Stargazing',
    description: 'Experience breathtaking sunsets followed by stargazing under the clear Tenerife skies. Perfect for romantic evenings and astronomy enthusiasts.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop',
    video: activityVideoMap['sunset-stargazing'],
    price: 'From £89',
    duration: '3-4 hours',
    category: 'Nature & Adventure'
  },
  {
    id: 'jet-ski',
    name: 'Jet Ski',
    description: 'Ride the waves and explore the stunning Tenerife coastline on an exhilarating jet ski adventure. Professional guidance included.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=500&fit=crop',
    video: activityVideoMap['jet-ski'],
    price: 'From £129',
    duration: '1-2 hours',
    category: 'Water Sports'
  },
  {
    id: 'sports-fishing',
    name: 'Sports Fishing',
    description: 'Offshore sports fishing experience in the Atlantic waters. Catch tuna, marlin, and other game fish with expert guides.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop',
    price: 'From £199',
    duration: 'Half day',
    category: 'Water Sports'
  },
  {
    id: 'helicopter',
    name: 'Helicopter Experience',
    description: 'Soar above Tenerife and capture stunning aerial views of volcanic landscapes, coastlines, and Teide National Park.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=500&fit=crop',
    price: 'From £299',
    duration: '30-60 minutes',
    category: 'Adventure'
  },
  {
    id: 'buggy',
    name: 'Buggy Tour',
    description: 'Off-road buggy adventure through scenic routes and rugged terrain. Explore hidden paths and enjoy panoramic views.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    video: activityVideoMap['buggy'],
    price: 'From £149',
    duration: '2-3 hours',
    category: 'Adventure'
  },
  {
    id: 'paragliding',
    name: 'Paragliding',
    description: 'Glide over volcanic landscapes with experienced pilots. Experience the thrill of flight with breathtaking views of Tenerife.',
    image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=500&fit=crop',
    price: 'From £179',
    duration: '1-2 hours',
    category: 'Adventure'
  },
  {
    id: 'go-karting',
    name: 'Go Karting',
    description: 'High-speed karting experience on professional tracks. Challenge friends and family to an exciting race.',
    image: 'https://images.unsplash.com/photo-1568605117032-6fe5bfe5062d?w=800&h=500&fit=crop',
    price: 'From £79',
    duration: '1 hour',
    category: 'Entertainment'
  },
  {
    id: 'scuba-diving',
    name: 'Scuba Diving',
    description: 'Discover underwater life in crystal-clear Atlantic waters. Professional PADI-certified instructors for all levels.',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=500&fit=crop',
    price: 'From £159',
    duration: 'Half day',
    category: 'Water Sports'
  },
  {
    id: 'parasailing',
    name: 'Parasailing',
    description: 'Take to the skies above the ocean for panoramic views. Safe and thrilling experience for all ages.',
    image: 'https://images.unsplash.com/photo-1544551763-9c0b0c0c0c0c?w=800&h=500&fit=crop',
    price: 'From £119',
    duration: '1 hour',
    category: 'Water Sports'
  },
  {
    id: 'quad-tour',
    name: 'Quad Tour',
    description: 'Explore off-road trails on powerful quads. Navigate through diverse landscapes with expert guides.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    price: 'From £139',
    duration: '2-3 hours',
    category: 'Adventure'
  },
  {
    id: 'kayaking',
    name: 'Kayaking',
    description: 'Paddle along the coastline and discover hidden coves. Guided tours for beginners and experienced kayakers.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop',
    price: 'From £89',
    duration: '2-3 hours',
    category: 'Water Sports'
  },
  {
    id: 'f1-simulator',
    name: 'F1 Simulator',
    description: 'Feel the speed in a realistic F1 simulator experience. Professional racing simulation with authentic controls.',
    image: 'https://images.unsplash.com/photo-1568605117032-6fe5bfe5062d?w=800&h=500&fit=crop',
    price: 'From £69',
    duration: '30 minutes',
    category: 'Entertainment'
  },
];

// Events data
const eventsData = [
  {
    id: 'siam-park',
    name: 'Siam Park',
    description: 'Europe\'s best water park with thrilling slides, lazy rivers, and wave pools. A must-visit family attraction.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £39',
    duration: 'Full day',
    category: 'Theme Park',
    url: 'https://siampark.net/es/'
  },
  {
    id: 'loro-parque',
    name: 'Loro Parque',
    description: 'World-famous animal adventure park featuring dolphins, orcas, penguins, and exotic birds. Educational and entertaining.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £35',
    duration: 'Full day',
    category: 'Theme Park',
    url: 'https://www.loroparque.com'
  },
  {
    id: 'jungle-park',
    name: 'Jungle Park',
    description: 'Jungle-themed park with animal shows, zip lines, and adventure activities. Fun for the whole family.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £32',
    duration: 'Half day',
    category: 'Theme Park',
    url: 'https://tickets.junglepark.es/?lang=en'
  },
  {
    id: 'scandal',
    name: 'Scandal Dinner Show',
    description: 'Spectacular dinner show experience with world-class entertainment, gourmet dining, and live performances.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £65',
    duration: '3-4 hours',
    category: 'Entertainment',
    url: 'https://scandaldinnershow.com/?'
  },
  {
    id: 'medieval',
    name: 'Medieval Adventure',
    description: 'Step back in time with a medieval-themed dinner show featuring knights, jousting, and traditional feasting.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £55',
    duration: '3-4 hours',
    category: 'Entertainment',
    url: 'https://medievaladventure.com'
  },
  {
    id: 'history-of-music',
    name: 'History of Music',
    description: 'A spectacular musical journey through the decades. Live performances, dancing, and unforgettable entertainment.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £60',
    duration: '3-4 hours',
    category: 'Entertainment',
    url: 'https://historytheshow.com'
  },
  {
    id: 'utopia-boat-party',
    name: 'Utopia Boat Party',
    description: 'Legendary boat party experience in Tenerife. Dance, drink, and celebrate on the open water with DJs and live music.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £45',
    duration: '4-5 hours',
    category: 'Party',
    url: 'https://utopiaparties.com/boat-party/'
  },
  {
    id: 'monkey-beach',
    name: 'Monkey Beach Club',
    description: 'Exclusive beach club events and reservations. Enjoy premium service, cocktails, and beachside relaxation.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: 'From £35',
    duration: 'Full day',
    category: 'Beach Club',
    url: 'https://www.monkeybeachclub.com/en'
  },
];

// Rentals data
const rentalsData = [
  {
    id: 'luxury-car',
    name: 'Luxury Car',
    description: 'Premium vehicles including Mercedes-Benz, BMW, and Audi. Full insurance and 24/7 support included.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£199/day',
    type: 'Mercedes-Benz, BMW, Audi'
  },
  {
    id: 'yacht-charter',
    name: 'Yacht Charter',
    description: 'Premium yacht rentals for private charters. Perfect for special occasions, parties, or luxury exploration.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£1,299/day',
    type: 'Premium Yacht'
  },
  {
    id: 'private-villa',
    name: 'Private Villa',
    description: 'Luxury oceanview villas with private pools, stunning views, and premium amenities. Perfect for groups.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£899/night',
    type: 'Oceanview Villa'
  },
  {
    id: 'helicopter-rental',
    name: 'Helicopter Rental',
    description: 'Private helicopter tours and scenic flights. Professional pilots and breathtaking aerial experiences.',
    image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£2,499/hour',
    type: 'Scenic Tours'
  },
  {
    id: 'jet-ski-rental',
    name: 'Jet Ski Rental',
    description: 'High-performance jet skis for water adventures. Safety equipment and briefings included.',
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£149/hour',
    type: 'Water Adventure'
  },
  {
    id: 'mountain-bike',
    name: 'Mountain Bike',
    description: 'Premium mountain bikes for trail exploration. Helmets and safety gear included.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    price: '£39/day',
    type: 'Trail Explorer'
  },
];

// Card component for offerings with blurred overlay, similar to homepage cards
const OfferingCard = ({ item, type }: { item: any; type: 'activity' | 'event' | 'rental' | 'experience' }) => {
  const hasVideo = item.video && typeof item.video === 'object' && item.video.desktop && item.video.mobile;

  return (
    <div className="group relative rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl">
      {/* Media background */}
      <div className="absolute inset-0 bg-gray-200">
        {hasVideo ? (
          <>
            {/* Desktop Video (16:9) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hidden md:block absolute inset-0 w-full h-full object-cover"
              poster={item.image}
            >
              <source src={item.video.desktop} type="video/mp4" />
            </video>
            {/* Mobile Video (9:16) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="md:hidden absolute inset-0 w-full h-full object-cover"
              poster={item.image}
            >
              <source src={item.video.mobile} type="video/mp4" />
            </video>
          </>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src =
                'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop';
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
      </div>

      {/* Category pill */}
      {item.category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-luxe-gold text-black px-3 py-1 rounded-luxe-md text-xs font-semibold uppercase">
            {item.category}
          </span>
        </div>
      )}

      {/* Glassmorphic content card */}
      <div className="relative z-10 flex items-end h-[260px]">
        <div className="w-[92%] mx-auto mb-4 bg-white/10 group-hover:bg-black/70 backdrop-blur-md rounded-luxe-xl px-5 py-4 flex flex-col gap-3 transition-all duration-300 border border-white/10">
          <div>
            <h3 className="luxe-heading-3 text-white mb-1 line-clamp-1">{item.name}</h3>
            {item.type && (
              <p className="luxe-text-body-small text-white/70 mb-1 line-clamp-1">{item.type}</p>
            )}
            <p className="luxe-text-body-small text-white/90 line-clamp-2">{item.description}</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-luxe-gold font-bold text-lg">{item.price}</span>
              {item.duration && (
                <span className="text-gray-200 text-xs mt-1">• {item.duration}</span>
              )}
            </div>
            {type === 'event' && item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Button variant="luxe-outline" className="text-xs px-4 py-2 h-9">
                  Book on Site
                </Button>
              </a>
            ) : type === 'experience' ? (
              <Link href={`${routes.ui.experiences}/${item.id}`} className="shrink-0">
                <Button variant="luxe" className="text-xs px-4 py-2 h-9">
                  View Details
                </Button>
              </Link>
            ) : (
              <Button variant="luxe" className="text-xs px-4 py-2 h-9 shrink-0">
                Inquire Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OfferingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="w-full container-padding mt-20">
        <div className="relative h-[320px] md:h-[420px] rounded-luxe-xl overflow-hidden">
          {/* Desktop Video (16:9) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            poster={getMediaUrl("/assets/images/Excursion-Hero-Img.png")}
          >
            <source src={getMediaUrl("/assets/videos/Beauty of Tenerife 16-9 - Final Video.mp4")} type="video/mp4" />
          </video>
          {/* Mobile Video (9:16) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:hidden absolute inset-0 w-full h-full object-cover"
            poster={getMediaUrl("/assets/images/Excursion-Hero-Img.png")}
          >
            <source src={getMediaUrl("/assets/videos/Beauty of Tenerife 9-16 - Final Video.mp4")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 max-w-[1160px] w-full mx-auto h-full justify-center px-4">
            <h1 className="luxe-heading-display text-white uppercase text-center">
              Activities, Events & Rentals
            </h1>
            <p className="luxe-text-body-large text-gray-100 text-center max-w-6xl">
              Discover thrilling activities, unforgettable events, and premium rentals to build your perfect Luxe Experience.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section-padding container-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxe-heading-1 text-luxe-gray-dark uppercase mb-4 text-center md:text-left">
            Activities & Excursions
          </h2>
          <p className="luxe-text-body-large text-luxe-gray-medium mb-12 text-center md:text-left max-w-3xl">
            Choose from our wide range of activities and excursions. From water sports to adventure activities,
            there&apos;s something for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 section-gap">
            {activitiesData.map((activity) => (
              <OfferingCard key={activity.id} item={activity} type="activity" />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxe-heading-1 text-luxe-gray-dark uppercase mb-4 text-center md:text-left">
            Events & Entertainment
          </h2>
          <p className="luxe-text-body-large text-luxe-gray-medium mb-12 text-center md:text-left max-w-3xl">
            Experience world-class entertainment, theme parks, and exclusive events. Book directly through our partners
            or include in your experience package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 section-gap">
            {eventsData.map((event) => (
              <OfferingCard key={event.id} item={event} type="event" />
            ))}
          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="section-padding container-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="luxe-heading-1 text-luxe-gray-dark uppercase mb-4 text-center md:text-left">
            Premium Rentals
          </h2>
          <p className="luxe-text-body-large text-luxe-gray-medium mb-12 text-center md:text-left max-w-3xl">
            Rent premium vehicles, yachts, villas, and equipment for your perfect Tenerife adventure.
            All rentals include full support and luxury amenities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 section-gap">
            {rentalsData.map((rental) => (
              <OfferingCard key={rental.id} item={rental} type="rental" />
            ))}
          </div>
        </div>
      </section>

      {/* (No Private Tours CTA – offerings focus on activities, events, rentals) */}
    </div>
  );
}

