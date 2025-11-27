import { getMediaUrl } from '@/lib/utils';

const CoreValues = () => {
  const values = [
    {
      title: "Boutique Service",
      icon: getMediaUrl("/assets/images/Target.svg"),
      description:
        "Every itinerary is handcrafted. We keep group sizes intimate, listen carefully to your preferences, and fine‑tune the details so your time in Tenerife feels effortless and personal.",
    },
    {
      title: "Local Expertise",
      icon: getMediaUrl("/assets/images/Collaboration.svg"),
      description:
        "Our team lives and breathes Tenerife. From hidden coves and local restaurants to the best times for whales and dolphins, we connect you with the island like an insider.",
    },
    {
      title: "Seamless Luxury",
      icon: getMediaUrl("/assets/images/Lightbulb.svg"),
      description:
        "From airport pick‑up and private transfers to premium partners and trusted captains, we focus on friction‑free logistics so you can focus on enjoying every moment.",
    },
    {
      title: "Memories That Last",
      icon: getMediaUrl("/assets/images/Handshake.svg"),
      description:
        "Whether it's a proposal, celebration, or once‑in‑a‑lifetime family trip, we design experiences that are filmed, photographed, and remembered long after you leave the island.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="luxe-heading-1 text-white mb-6 uppercase">
            Our Core Values
          </h2>
          <p className="luxe-text-body-large text-white max-w-[601px] mx-auto">
            These are the principles that guide how we host you in Tenerife – from the first message you send us to
            the moment you fly home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 text-white p-6 text-left rounded-luxe-xl backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10">
                {value.icon && (
                  <img src={value.icon} alt={value.title} className="w-7 h-7 object-contain" />
                )}
              </div>
              <h3 className="luxe-heading-3 mb-3 uppercase">
                {value.title}
              </h3>
              <p className="luxe-text-body text-gray-200 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
