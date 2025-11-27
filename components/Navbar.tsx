'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme?: 'light' | 'dark';
  backgroundColor: 'dark' | '';
}

const Navbar = ({ theme = 'dark', backgroundColor }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Experiences", path: "/experiences" },
    { name: "Offerings", path: "/offerings" },
  ];

  const isActive = (path: string) => pathname === path;

  // Color logic based on theme prop
  const textColor = theme === 'light' ? "text-luxe-gray-dark" : "text-white";
  const hoverColor = theme === 'light' ? "hover:text-luxe-gold" : "hover:text-luxe-gold";
  const activeColor = theme === 'light' ? "text-luxe-gold" : "text-luxe-gold";

  return (
    <nav className={`fixed backdrop-blur-md top-0 left-0 w-full z-[100] ${theme === 'dark' ? 'text-white' : 'text-luxe-gray-dark'} ${backgroundColor === 'dark' ? 'bg-luxe-black': 'bg-white/10' }`}>
      <div className="mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              <img src="/assets/images/Header-2-Logo.svg" alt="alt" />
            </span>
          </Link>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium transition-colors ${hoverColor} ${
                  isActive(item.path) ? activeColor : textColor
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} ${hoverColor}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md border-t border-white/20 rounded-b-lg relative">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-3 py-2 text-white text-base font-medium transition-colors hover:text-amber-600 ${
                    isActive(item.path) ? "text-amber-600" : textColor
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
