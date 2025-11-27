
const TeamSection = () => {
  const team = [
    {
      name: "Emma Rose",
      role: "Founder & CEO",
      image: "/assets/images/Ema-Rose.svg"
    },
    {
      name: "Alexander David",
      role: "Head of Operations",
      image: "/assets/images/A-David.svg"
    },
    {
      name: "Amelia Jane",
      role: "Experience Director",
      image: "/assets/images/Amelia-jane.svg"
    }
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-16">
          <h2 className="luxe-heading-1 text-luxe-gray-dark uppercase text-left mb-4 md:mb-0">
            Meet Our Passionate<br className="hidden md:block" /> Teammates
          </h2>
          <p className="luxe-text-body-large text-luxe-gray-medium max-w-[701px] text-left md:text-right">
            Our team is dedicated to ensuring your travel adventures. Each member brings a
            wealth of knowledge, passion, and an unwavering care of every traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member, index) => (
            <div key={index} className="text-left">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[413px] h-[413px] filter grayscale hover:grayscale-0 transition-all rounded-[20px] duration-300"
                />
              </div>
              <h3 className="luxe-heading-3 text-luxe-gray-dark uppercase">
                {member.name}
              </h3>
              <p className="luxe-text-body-large text-luxe-gray-medium font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
