'use client'
import BookingHero from "@/components/booking/BookingHero";
import BookingDetailsContent from "@/components/booking/BookingDetailsContent";

const BookingDetails = () => {
  return (
    <div className="min-h-screen bg-luxe-black text-white">
      <BookingHero title="Booking Details" />
      <BookingDetailsContent />
    </div>
  );
};

export default BookingDetails;