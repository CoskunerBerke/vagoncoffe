'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, X, Info } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { src: '/gallery/gallery-1.jpg', category: 'food', title: 'Espresso & Burger Buluşması', sub: 'Wagon İstasyonu' },
    { src: '/gallery/gallery-2.jpg', category: 'interior', title: 'Tren Kompartımanı Oturma Alanı', sub: 'Mekân Detayları' },
    { src: '/gallery/gallery-3.jpg', category: 'interior', title: 'Wagon İstasyon Girişi', sub: 'Dış Cephe ve Işıklar' },
    { src: '/gallery/gallery-4.jpg', category: 'coffee', title: 'Monkey Express Latte Art', sub: 'Nitelikli Espresso' },
    { src: '/gallery/gallery-5.jpg', category: 'food', title: 'Mom\'y Gurme Cheeseburger', sub: 'Sulu Dana Köftesi' },
    { src: '/gallery/gallery-6.jpg', category: 'food', title: 'Baharatlı Sokak Patatesi', sub: 'Çıtır Lezzetler' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'coffee', label: 'Kahve (Monkey Express)' },
    { id: 'food', label: 'Lezzetler (Mom\'y)' },
    { id: 'interior', label: 'Mekân & Atmosfer' },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FCFAF5] font-sans">
            GÖRSEL YOLCULUK
          </h1>
          <p className="text-sm text-[#FCFAF5]/60 mt-3 font-light">
            Tren konseptli kafemizin her köşesindeki estetik detayları, Monkey Express kahvelerini ve iştah açıcı Mom'y Burgers sokak lezzetlerini inceleyin.
          </p>
          <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0 transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-[#B86236] text-[#FCFAF5] shadow-lg shadow-[#B86236]/20'
                  : 'bg-black/30 border border-[#FCFAF5]/10 text-[#FCFAF5]/70 hover:border-[#B86236]/30 hover:text-[#FCFAF5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-[#FCFAF5]/5"
              onClick={() => setSelectedImage(item.src)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B86236] mb-1">
                  {item.sub}
                </span>
                <h3 className="text-base font-bold text-[#FCFAF5] line-clamp-1 mb-3">
                  {item.title}
                </h3>
                <div className="inline-flex items-center space-x-1 text-xs text-[#FCFAF5]/60 hover:text-[#FCFAF5] transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>Görseli Büyüt</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-sm text-[#FCFAF5]/60 font-light">Mekânımızdan en güncel anları ve hikâyeleri kaçırmayın.</p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black/40 border border-[#FCFAF5]/10 hover:border-[#B86236]/30 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Instagram className="h-4 w-4 text-[#B86236]" />
            <span>@wagoncoffeefood Instagram Galerisi</span>
          </a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-[#FCFAF5] hover:text-[#B86236] focus:outline-none p-2 bg-black/40 rounded-full"
              onClick={() => setSelectedImage(null)}
              aria-label="Kapat"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative max-w-4xl max-h-[85vh] aspect-square w-full">
              <Image
                src={selectedImage}
                alt="Wagon Gallery Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
