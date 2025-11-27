
import { Button } from "@/components/ui/button";
import { getMediaUrl } from '@/lib/utils';

const CraftingJourneys = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <img
              src={getMediaUrl("/assets/images/Destination.png")}
              alt="Luxury yacht and Tenerife coastline"
              className="w-full h-[500px] object-cover rounded-luxe-2xl"
            />
          </div>
          <div>
            <h2 className="luxe-heading-1 text-luxe-gray-dark mb-4 uppercase">
              Crafting Unforgettable Luxe Journeys
            </h2>
            <p className="luxe-text-body-large text-luxe-gray-medium xl:mb-20 mb-10">
              We design elevated experiences across Tenerife that go far beyond a standard excursion. From private yacht charters and sunset cruises to stargazing, adventure sports, and world‑class entertainment, every journey is curated around what you and your group truly want to feel and remember.
            </p>
            <Button variant="luxe" className="px-8 py-4">
              Explore Experiences →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingJourneys;
