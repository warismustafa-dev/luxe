const ImageGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
          {/* Large card on the left */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.pexels.com/photos/1500375/pexels-photo-1500375.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Luxury Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Discover Paradise</h3>
                <p className="text-white/90">Immerse yourself in breathtaking landscapes</p>
              </div>
            </div>
          </div>

          {/* Two stacked cards on the right */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg flex-1">
              <img
                src="https://images.pexels.com/photos/1523712/pexels-photo-1523712.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Adventure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Adventure Awaits</h3>
                  <p className="text-white/90 text-sm">Thrilling experiences</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg flex-1">
              <img
                src="https://images.pexels.com/photos/1469474/pexels-photo-1469474.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Luxury Comfort"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Luxury Comfort</h3>
                  <p className="text-white/90 text-sm">Unparalleled elegance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;