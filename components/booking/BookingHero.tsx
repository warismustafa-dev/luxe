import { useRouter } from "next/navigation";
import { getMediaUrl } from '@/lib/utils';

interface BookingHeroProps {
  title: string;
}

const BookingHero = ({ title }: BookingHeroProps) => {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <div className="flex items-center gap-4 container-padding pt-24 bg-luxe-black">
      <button
        onClick={onBack}
        className="w-12 h-12 border-2 border-white/20 rounded-luxe-md flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
        aria-label="Go Back"
        type="button"
      >
        <img src={getMediaUrl("/assets/images/left-chevron.svg")} alt="go back" className="invert" />
      </button>
      <h1 className="luxe-heading-display text-white uppercase">
        {title}
      </h1>
    </div>
  );
};

export default BookingHero;
