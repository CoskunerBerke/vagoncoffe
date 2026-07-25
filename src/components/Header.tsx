'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Coffee } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Menü', href: '/menu' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#171817]/90 backdrop-blur-md border-b border-[#FCFAF5]/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/brand/logo-light.svg"
                alt="Wagon Coffee & Food Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#B86236] ${
                    isActive ? 'text-[#B86236]' : 'text-[#FCFAF5]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Conditional Maps URL link */}
            {siteConfig.mapsUrl && (
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium tracking-wide text-[#FCFAF5] hover:text-[#B86236] transition-colors"
              >
                Konum
              </a>
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/menu"
              className="bg-[#B86236] hover:bg-[#a0522b] text-[#FCFAF5] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-md hover:shadow-[#B86236]/20"
            >
              Menüyü Gör
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FCFAF5] hover:text-[#B86236] focus:outline-none p-2"
              aria-label="Navigasyon Menüsü"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#171817] transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-semibold tracking-wide border-b border-[#FCFAF5]/10 pb-3 transition-colors ${
                    isActive ? 'text-[#B86236]' : 'text-[#FCFAF5]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {siteConfig.mapsUrl && (
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold tracking-wide text-[#FCFAF5] border-b border-[#FCFAF5]/10 pb-3"
              >
                Konum
              </a>
            )}
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="bg-[#B86236] text-[#FCFAF5] text-center py-3.5 rounded-full font-bold uppercase tracking-wider text-sm transition-all"
            >
              Menüyü Gör
            </Link>
            
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-[#FCFAF5]/60 hover:text-[#FCFAF5] transition-colors py-2 text-sm"
            >
              <Instagram className="h-4 w-4" />
              <span>@wagoncoffeefood</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
