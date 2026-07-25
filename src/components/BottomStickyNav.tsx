'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookOpen, Search, MapPin, MessageSquare } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';

export default function BottomStickyNav() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/menu?search=focus');
  };

  const hasMaps = !!siteConfig.mapsUrl;
  const hasWhatsapp = !!siteConfig.whatsapp;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#171817]/95 border-t border-[#FCFAF5]/10 backdrop-blur-lg z-50 md:hidden pb-safe-bottom">
      <div className="flex justify-around items-center h-16 px-4">
        {/* Menu */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center text-[#FCFAF5]/70 hover:text-[#B86236] transition-colors"
        >
          <BookOpen className="h-5 w-5" />
          <span className="text-[10px] mt-1 font-medium">Menü</span>
        </Link>

        {/* Search */}
        <button
          onClick={handleSearchClick}
          className="flex flex-col items-center justify-center text-[#FCFAF5]/70 hover:text-[#B86236] transition-colors"
        >
          <Search className="h-5 w-5" />
          <span className="text-[10px] mt-1 font-medium">Ara</span>
        </button>

        {/* Conditional Directions */}
        {hasMaps && (
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[#FCFAF5]/70 hover:text-[#B86236] transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">Yol Tarifi</span>
          </a>
        )}

        {/* WhatsApp or Instagram */}
        {hasWhatsapp ? (
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20Wagon%20Coffee%20%26%20Food%20hakkında%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[#FCFAF5]/70 hover:text-[#B86236] transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">WhatsApp</span>
          </a>
        ) : (
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[#FCFAF5]/70 hover:text-[#B86236] transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-[10px] mt-1 font-medium">Instagram</span>
          </a>
        )}
      </div>
    </div>
  );
}
