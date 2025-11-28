'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMediaUrl } from "@/lib/utils";

const ExcursionBanner = () => (
  <section className="section-padding text-white relative bg-cover bg-center mx-4 md:mx-8 lg:mx-[60px] mt-24 rounded-luxe-xl" style={{
    backgroundImage: `url('${getMediaUrl("/assets/images/our-excursion-image.png")}')`
  }}>
    <div className="absolute inset-0 bg-black/50 rounded-luxe-xl"></div>
    <div className="relative z-10 xl:max-w-7xl max-w-auto mx-auto text-center container-padding">
      <h2 className="luxe-heading-1 text-white mb-8">Our Excursions</h2>
      <p className="luxe-text-body-large mb-8 text-gray-200 mx-auto text-center max-w-4xl">
        Embark on an extraordinary journey with Luxe Excursions Tenerife, where we specialise in crafting bespoke luxury experiences that showcase the island&apos;s breathtaking beauty. From exclusive yacht charters to exhilarating adventures and unforgettable parties, we transform travel dreams into cherished memories, ensuring every moment is infused with excitement and joy.
      </p>
      <Button variant="luxe" className="px-8 md:px-10 py-4 md:py-5 text-base md:text-lg">
        <Link href="/excursions">View Excursions</Link>
      </Button>
    </div>
  </section>
);

export default ExcursionBanner;