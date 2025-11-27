'use client'
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";


import Navbar from "@/components/Navbar";
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isExperienceDetail = pathname?.startsWith('/experiences/') && pathname?.split('/').length === 3;
  const navbarTheme =
    pathname === '/contact' ||
    pathname === '/excursions' ||
    pathname === '/offerings' ||
    pathname === '/private-tours' ||
    pathname === '/booking-details' ||
    isExperienceDetail ||
    pathname === '/experiences' ||
    pathname === '/events' ||
    pathname === '/activities' ||
    pathname === '/rentals'
      ? 'light'
      : 'dark';
  const navbarBgColor = pathname === '/about' ? 'dark' : ''
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={navbarTheme} backgroundColor={navbarBgColor} />
      <main className={`flex-1 ${pathname !== '/' ? 'pt-16' : ''}`}>{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}