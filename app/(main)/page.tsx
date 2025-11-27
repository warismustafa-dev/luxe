import Link from 'next/link';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import ExcursionBanner from '@/components/home/ExcursionBanner';
import { getMediaUrl } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Desktop Video (16:9) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          poster={getMediaUrl("/assets/images/hero-image.svg")}
        >
          <source src={getMediaUrl("/assets/videos/Luxe Excursions Tenerife (Introduction) 2-39 4K - Final Video.mp4")} type="video/mp4" />
        </video>
        {/* Mobile Video (9:16) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          poster={getMediaUrl("/assets/images/hero-image.svg")}
        >
          <source src={getMediaUrl("/assets/videos/Luxe Excursions Tenerife (Introduction) 9-16 - Final Video.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center mx-auto px-4 md:px-20">
            <img src={getMediaUrl("/assets/images/Logo-big.svg")} alt="Luxe Excursions Tenerife" className='w-[180px] h-[154px] md:w-[240px] md:h-[206px] mx-auto' />
          </div>
        </div>
      </section>

      {/* Welcome Section with Cards */}
      <section className="section-padding bg-luxe-black">
        <div className="mx-auto container-padding text-center">
          <h2 className="luxe-heading-display text-white mb-8">
            Welcome to Luxe Excursions Tenerife
          </h2>
          <p className="luxe-text-body text-white lg:max-w-[1062px] max-w-full mx-auto mb-16">
            As a premier luxury excursion shop, we specialise in offering an unparalleled array of tours, parties, adventures and rentals that showcase the breathtaking beauty of Tenerife. Our mission is to create unforgettable experiences that leave a lasting impression on every guest, ensuring that each moment is infused with luxury, excitement, and joy.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 section-gap">
            {/* Experiences Card */}
            <Link href="/experiences" className="group relative lg:h-[587px] md:h-auto rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img
                src={getMediaUrl("/assets/images/private-tour.jpg")}
                alt="Experience Packages"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0">
                <div className="absolute w-[93%] left-1/2 -translate-x-1/2 bottom-6 bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-6 py-4 flex flex-col items-center transition-all duration-300">
                  <h3 className="font-anton font-normal uppercase text-white text-3xl md:text-3xl mb-2 text-center">
                    Experience Packages
                  </h3>
                  <p className="w-[246px] h-12 font-inter font-medium text-base leading-[150%] text-center text-white">
                    Diamond, Gold, Silver, and Party Luxe experiences
                  </p>
                </div>
              </div>
            </Link>

            {/* Premium Rentals Card */}
            <Link href="/offerings#rentals" className="group relative lg:h-[587px] md:h-auto rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img
                src={getMediaUrl("/assets/images/premium-rentals.jpg")}
                alt="Premium Rentals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0">
                <div className="absolute w-[92%] left-1/2 -translate-x-1/2 bottom-6 bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-6 py-4 flex flex-col items-center transition-all duration-300">
                  <h3 className="font-anton font-bold uppercase text-white text-2xl md:text-3xl mb-2 text-center">
                    Premium Rentals
                  </h3>
                  <p className="w-[246px] h-12 font-inter font-medium text-base leading-[150%] text-center text-white">
                    Cars, boats, and gear to elevate your trip
                  </p>
                </div>
              </div>
            </Link>

            {/* Two Stacked Cards */}
            <div className="flex flex-col gap-4 lg:h-[587px] md:h-auto">
              <Link href="/offerings#activities" className="group relative flex-1 rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img
                  src={getMediaUrl("/assets/images/adventure-activities.jpg")}
                  alt="Adventure Activities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                    <h3 className="text-xl text-white font-anton font-normal mb-1 text-center">
                      Adventure Activities
                    </h3>
                    <p className="text-white/90 text-sm font-inter font-normal text-center">
                      Jet skis, paragliding, hiking, and more
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/offerings#activities" className="group relative flex-1 rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img
                  src={getMediaUrl("/assets/images/snow-mountain.jpg")}
                  alt="Water Sports"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                  <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                    <h3 className="text-xl text-white font-anton font-normal mb-1 text-center">
                      Water Sports
                    </h3>
                    <p className="text-white/90 text-sm font-inter font-normal text-center">
                      Diving, snorkeling, and aquatic adventures
                    </p>
                  </div>
              </div>
              </Link>
            </div>

            {/* Exclusive Parties Card */}
            <Link href="/offerings#events" className="group relative lg:h-[587px] md:h-auto rounded-luxe-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105">
              <img
                src={getMediaUrl("/assets/images/exclusive-parties.jpg")}
                alt="Exclusive Parties"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-xl text-white font-anton font-normal mb-1 text-center">
                    Exclusive Parties
                  </h3>
                  <p className="text-white/90 text-sm font-inter font-normal text-center">
                    Celebrate on yachts, beaches, or private venues
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Text Section with Gradient */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-20 text-center">
          <blockquote className="xl:w-[1280px] w-auto h-auto font-anton font-normal xl:text-6xl xl:leading-none lg:text-3xl md:text-2xl text-xl leading-[120%] uppercase">
            <span style={{
            color: '#101010'
          }}>
              Comprehensive and tailored travel services crafted to surpass your{' '}
            </span>
            <span className="text-[#D6D6D6]">
              every expectation and fulfill your unique travel desires.
            </span>
          </blockquote>
        </div>
      </section>

      {/* Experience Grid Section - Diamond, Gold, Custom, Party */}
      <section className="py-4 md:py-6 px-4 md:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
            {/* Diamond Experience - Compact */}
            <div className="group relative overflow-hidden rounded-luxe-2xl shadow-lg h-[300px] md:h-[350px] lg:h-[400px]" style={{
            backgroundImage: `url('${getMediaUrl("/assets/images/Destination.png")}')`
          }}>
            <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h2 className="text-xl md:text-2xl lg:text-[28px] text-white font-anton font-normal mb-2 uppercase w-auto max-w-full break-words text-center lg:text-left">
                DIAMOND EXPERIENCE
                    <span className="block md:inline md:ml-4 text-sm md:text-base font-anton mt-1 md:mt-0">(PRIVATE YACHT CHARTER (3 HOURS))</span>
              </h2>
                  <p className="text-white/90 text-xs md:text-sm font-inter font-normal w-auto max-w-full break-words text-center lg:text-left">
                Our Premium Experience Package is designed to create unforgettable memories for travelers of all kinds. Enjoy a mix of relaxation and adventure with activities that include champagne, water sports, luxury transfers, and encounters with whales and dolphins.
              </p>
            </div>
          </div>
        </div>

            {/* Gold Experience - Same height as Diamond */}
            <div className="group relative overflow-hidden rounded-luxe-2xl shadow-lg h-[300px] md:h-[350px] lg:h-[400px]">
              <img
                src={getMediaUrl("/assets/images/Destination2.jpg")}
                alt="Gold Experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-[28px] text-white font-anton font-normal mb-2 uppercase w-auto max-w-full break-words text-center lg:text-left">
                    Gold Experience
                    <span className="block md:inline md:ml-4 text-sm md:text-base font-anton mt-1 md:mt-0">(PRIVATE YACHT CHARTER (3 HOURS))</span>
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm font-inter font-normal w-auto max-w-full break-words text-center lg:text-left">
                    Our Signature Luxury Package is designed to create unforgettable memories for travelers of all tastes. Enjoy a mix of relaxation and adventure with activities that include champagne, snorkeling, marine encounters, luxury transfers, and your choice of three exclusive excursions or events.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Experience */}
            <div className="group relative overflow-hidden rounded-luxe-2xl shadow-lg h-[250px] md:h-[280px] lg:h-[300px]">
                <img
                  src={getMediaUrl("/assets/images/destination3.jpg")}
                alt="Custom Experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-lg md:text-xl text-white font-anton font-normal mb-1 w-auto max-w-full break-words text-center lg:text-left">Custom Experience</h3>
                  <p className="text-white/90 text-xs md:text-sm font-inter w-auto max-w-full break-words text-center lg:text-left">Our Custom Experience Package is designed to create unforgettable memories for travelers seeking flexibility. Enjoy a mix of relaxation and adventure with luxury transfers, professional filming options, and three excursions, events, or activities of your choice.</p>
                  </div>
                </div>
              </div>

            {/* Party Experience */}
            <div className="group relative overflow-hidden rounded-luxe-2xl shadow-lg h-[250px] md:h-[280px] lg:h-[300px]">
                <img
                  src={getMediaUrl("/assets/images/destination4.jpg")}
                alt="Party Experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center lg:items-end lg:justify-end">
                <div className="bg-white/5 group-hover:bg-black/80 backdrop-blur-sm rounded-luxe-xl px-4 py-6 flex flex-col transition-all duration-300 max-w-[90%] mx-auto mb-0 lg:mb-8">
                  <h3 className="text-lg md:text-xl text-white font-anton font-normal mb-1 uppercase w-auto max-w-full break-words text-center lg:text-left">Party Experience</h3>
                  <p className="text-white/90 text-xs md:text-sm font-inter w-auto max-w-full break-words text-center lg:text-left">Our Party Experience Package is designed to create unforgettable memories for travelers who love to celebrate. Enjoy a mix of relaxation and excitement with one excursion or event of your choice, including a boat party, pool party, and luxury transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Excursion Banner Section with Background Image */}
      <ExcursionBanner />
    </div>
  );
}