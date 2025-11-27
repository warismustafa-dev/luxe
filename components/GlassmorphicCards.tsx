
const GlassmorphicCards = () => {
  const cards = [
    {
      title: "Private Tours",
      subtitle: "Explore Tenerife's hidden gems in comfort and style",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop"
    },
    {
      title: "Luxury Rentals",
      subtitle: "Premium vehicles and accommodations for your perfect getaway",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop"
    },
    {
      title: "Adventure Experiences",
      subtitle: "Thrilling activities designed for the discerning adventurer",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=600&fit=crop"
    },
    {
      title: "Exclusive Events",
      subtitle: "Curated celebrations and gatherings in stunning locations",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-base text-white/90 group-hover:text-white transition-colors">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlassmorphicCards;
