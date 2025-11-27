
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BookingDetailsHero = () => {
  return (
    <section className="bg-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link href="/booking" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Link>
          <h1 className="font-anton text-2xl md:text-3xl lg:text-4xl font-bold text-black uppercase tracking-wide">
            BOOKING DETAIL
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BookingDetailsHero;
