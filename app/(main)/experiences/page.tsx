"use client";
import Experiences from '@/components/experiences';

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Solid Luxe Black */}
      <section className="relative w-full bg-luxe-black h-screen overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto container-padding h-full flex items-center justify-center">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="luxe-heading-display text-white uppercase">
              Our Experience Packages
            </h1>
            <p className="luxe-text-body-large text-gray-200 max-w-3xl">
              Diamond, Gold, Silver, and Party experiences designed to combine luxury transfers, curated activities,
              and unforgettable moments across Tenerife.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <Experiences />
        </div>
      </section>
    </div>
  );
}
