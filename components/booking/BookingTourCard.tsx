import { Button } from "@/components/ui/button";
import React from "react";

interface BookingTourCardProps {
  image: string;
  alt: string;
  title: string;
  days: string;
  location: string;
  type: string;
  buttonText: string;
  buttonIcon: string;
}

const BookingTourCard: React.FC<BookingTourCardProps> = ({
  image,
  alt,
  title,
  days,
  location,
  type,
  buttonText,
  buttonIcon,
}) => (
  <div className="border-2 border-[#0A1805] rounded-xl p-6 bg-white">
    <div className="flex flex-wrap gap-5 items-center space-x-4">
      <img
        src={image}
        alt={alt}
        className="w-[120px] h-[120px] object-cover rounded-xl"
      />
      <div className="flex-1">
        <h3 className="font-anton text-xl text-[#101010] uppercase mb-2">{title}</h3>
        <div className="flex items-center flex-wrap gap-3 text-base font-inter text-[#101010] mb-3">
          <span className="flex items-center gap-2">
            <img src="/assets/images/address.svg" alt="" className="w-5 h-5" />
            {days}
          </span>
          <span className="flex items-center gap-2">
            <img src="/assets/images/Calender.svg" alt="" className="w-5 h-5" />
            {location}
          </span>
        </div>
        <p className="text-base font-inter text-[#101010] mb-2 flex items-center gap-2">
          <img src="/assets/images/Culinary.svg" alt="" className="w-5 h-5" />
          {type}
        </p>
        <Button variant="outline" size="lg" className="w-full h-12 rounded-xl border-[#0A1805] text-[#101010] font-inter font-medium text-base flex items-center justify-center gap-2">
          <img src={buttonIcon} alt="map" className="w-5 h-5" />
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
);

export default BookingTourCard;
