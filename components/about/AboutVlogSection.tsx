import { getMediaUrl } from '@/lib/utils';

const AboutVlogSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex flex-col gap-6 mb-8">
          <h2 className="luxe-heading-2 text-white uppercase text-left">
            Tenerife Experience Vlog
          </h2>
          <p className="luxe-text-body-large text-gray-300 max-w-3xl">
            Get a feel for what it&apos;s like to explore Tenerife with Luxe. This vlog shows real
            moments on the water, in the sun, and around the island – exactly the kind of memories
            we help you create.
          </p>
        </div>
        <div className="relative rounded-luxe-2xl overflow-hidden bg-black border border-white/10">
          <video
            controls
            playsInline
            className="w-full h-[260px] md:h-[420px] object-cover"
            poster={getMediaUrl("/assets/images/Excursion-Hero-Img.png")}
          >
            <source src={getMediaUrl("/assets/videos/Luxe Excursions Tenerife (Diamond Experience)(Vlog) - Final Video.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutVlogSection;


