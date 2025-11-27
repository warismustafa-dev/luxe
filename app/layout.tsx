import './globals.css';
import type { Metadata } from 'next';
import { Inter, Anton, Playfair_Display, Public_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const publicsans = Public_Sans({ subsets: ['latin'], variable: '--font-publicsans' });
// Poltawski Nowy is not available in next/font/google, so use a <link> in <head> if needed

export const metadata: Metadata = {
  title: 'Luxe Excursions Tenerife - Premium Travel Experiences',
  description: 'Discover exclusive private tours, luxury excursions, and unforgettable experiences in Tenerife with our premium travel services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} ${playfair.variable} ${publicsans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poltawski+Nowy:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/assets/images/Header-2-Logo.svg" type="image/svg+xml" />
        <meta property="og:image" content="/assets/images/Logo-big.svg" />
        <meta name="twitter:image" content="/assets/images/Logo-big.svg" />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
        {/* Global Toaster */}
        <div id="toaster-root">
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        </div>
      </body>
    </html>
  );
}