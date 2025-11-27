'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getMediaUrl } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="text-white xl:mt-[100px] mt-10 mb-4 mx-4 rounded-luxe-xl bg-luxe-black">
      <div className="mx-auto container-padding py-12">
        {/* First Row - Logo and Social Media */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              <img src={getMediaUrl("/assets/images/Header-2-Logo.svg")} alt="alt" className="w-[60px] h-[52px]" />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-white hover:text-luxe-gold transition-colors">
              <img src={getMediaUrl("/assets/images/Facebook 2.svg")} alt="fb" />
            </Link>
            <Link href="#" className="text-white hover:text-luxe-gold transition-colors">
              <img src={getMediaUrl("/assets/images/instax.svg")} alt="fb" />
            </Link>
            <Link href="#" className="text-white hover:text-luxe-gold transition-colors">
              <img src={getMediaUrl("/assets/images/Twitter 2.svg")} alt="fb" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Newsletter - wider column */}
          <div className="md:col-span-5 flex flex-col w-full min-w-0 max-w-[420px]">
            <h3 className="luxe-heading-3 text-[#FEFEFE] text-left mb-4">Join Our Newsletter!</h3>
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-white rounded-xl h-14 px-6 text-lg placeholder:text-gray-500 border-none shadow w-full mb-4 focus:outline-none text-black"
            />
            <div className="flex flex-col items-center gap-3 md:flex-row md:flex-nowrap md:gap-0 bg-white rounded-xl h-auto md:h-14 px-2 mb-4 w-full shadow">
              <Input
                type="text"
                placeholder="Your Name"
                className="flex-1 py-3 px-4 text-lg placeholder:text-gray-500 border-none bg-transparent focus-visible:!outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black w-full rounded-xl"
              />
              <Button className="bg-[#E0C469] md:mb-0 mb-2 rounded-xl h-12 md:h-10 px-6 md:mr-2 text-black font-medium shadow whitespace-nowrap text-base hover:bg-[#d1b15a] transition w-full md:w-auto">
                Join Newsletter
              </Button>
            </div>
          </div>

          {/* Discover */}
          <div className="md:col-span-2 w-full min-w-0">
            <h3 className="luxe-heading-3 text-white text-left mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Home</Link></li>
              <li><Link href="/about" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">About</Link></li>
              <li><Link href="/experiences" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Experiences</Link></li>
              <li><Link href="/offerings" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Offerings</Link></li>
              <li><Link href="/contact" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2 w-full min-w-0">
            <h3 className="luxe-heading-3 text-white text-left mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/customer-service" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Customer Service</Link></li>
              <li><Link href="/terms" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Terms &amp; Condition</Link></li>
              <li><Link href="/privacy" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Refund Policy</Link></li>
              <li><Link href="/travel-policy" className="luxe-text-body text-white/90 hover:text-luxe-gold transition">Travel Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 w-full min-w-0">
            <h3 className="luxe-heading-3 text-white text-left mb-4">Contact</h3>
            <ul className="space-y-3 text-lg break-words">
              <li className="flex items-center text-white/90 luxe-text-body">
                <span className="inline-block mr-2 text-[#E0C469] flex-shrink-0"><img src={getMediaUrl("/assets/images/Phone.svg")} alt="phone" /></span>
                <a href="tel:+34722645670" className="hover:text-luxe-gold transition">+34 722 645 670</a>
              </li>
              <li className="flex items-center text-white/90 luxe-text-body">
                <span className="inline-block mr-2 text-luxe-gold flex-shrink-0"><img src={getMediaUrl("/assets/images/Mail.svg")} alt="mail" /></span>
                <a href="mailto:luxeexcursionstenerife@gmail.com" className="hover:text-luxe-gold transition">luxeexcursionstenerife@gmail.com</a>
              </li>
              <li className="flex items-center text-white/90 luxe-text-body">
                <span className="inline-block mr-2 text-luxe-gold flex-shrink-0"><img src={getMediaUrl("/assets/images/Location-Filled.svg")} alt="location" /></span>
                <a href="https://maps.app.goo.gl/LGDs3Sck8Mv9CtAKA" target="_blank" rel="noopener noreferrer" className="hover:text-luxe-gold transition">8460 Rockville Ave. Greenville, NC 27834</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Luxe Excursions Tenerife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
