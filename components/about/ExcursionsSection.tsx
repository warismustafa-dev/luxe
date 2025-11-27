
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExcursionsSection = () => {
  return (
    <section className="relative py-20 bg-cover bg-center" style={{
      backgroundImage: "url('/assets/images/Trees.jpg')"
    }}>
      <div className="flex flex-col items-center justify-center bg-luxe-black rounded-luxe-2xl w-full max-w-[1280px] min-h-[364px] container-padding py-10 section-gap mx-auto">
        <div className="flex flex-col items-center w-full max-w-[814px] min-h-[284px] gap-[60px]">
          <div className="flex flex-col items-center justify-center w-full max-w-[814px] min-h-[162px] gap-4">
            <h2 className="luxe-heading-2 text-center text-luxe-white w-full max-w-[814px]">
              Our Excursions
            </h2>
            <p className="luxe-text-body-large text-center text-gray-300 w-full max-w-[814px]">
              Embark on an extraordinary journey with Luxe Excursions Tenerife, where we specialise in crafting bespoke luxury experiences that showcase the island&apos;s breathtaking beauty. From exclusive yacht charters to exhilarating adventures and unforgettable parties, we transform travel dreams into cherished memories, ensuring every moment is infused with excitement and joy.
            </p>
          </div>
          <Button variant="luxe" className="flex flex-row items-center justify-center gap-3 px-10 py-5 w-[219px] h-[62px] rounded-luxe-sm mx-auto">
            <span className="w-[139px] text-center">
              <Link href="/excursions">View Excursions</Link>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcursionsSection;
