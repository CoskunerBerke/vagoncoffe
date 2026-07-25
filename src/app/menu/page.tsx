import { Suspense } from 'react';
import MenuClient from './MenuClient';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: `Menü | ${siteConfig.name}`,
  description: 'Wagon Coffee & Food güncel dijital menüsü. Monkey Express specialty kahve çeşitlerini ve Mom\'y Burgers lezzetlerini inceleyin.',
};

export default function MenuPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#171817]">
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#FCFAF5]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#B86236] mb-4"></div>
            <p className="text-xs text-[#FCFAF5]/50 uppercase tracking-widest">Lezzetler Yükleniyor...</p>
          </div>
        }
      >
        <MenuClient />
      </Suspense>
    </div>
  );
}
