'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Coffee, ArrowRight, MapPin, Eye, UtensilsCrossed, ChevronRight, X } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';
import { menuItems } from '@/data/menu';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredProducts = menuItems.filter((item) => item.featured && item.verified);

  const galleryImages = [
    '/gallery/gallery-1.jpg',
    '/gallery/gallery-2.jpg',
    '/gallery/gallery-3.jpg',
    '/gallery/gallery-4.jpg',
    '/gallery/gallery-5.jpg',
    '/gallery/gallery-6.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as any } },
  };

  return (
    <div className="relative w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-wagon.jpg"
            alt="Wagon Cafe Hero background"
            fill
            className="object-cover opacity-60 scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171817] via-[#171817]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-[#FCFAF5]/10 border border-[#FCFAF5]/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#B86236] animate-ping" />
            <span className="text-[11px] font-semibold tracking-widest text-[#F3EBDD] uppercase">
              TREN KONSEPTLİ LEZZET İSTASYONU
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#FCFAF5] mb-6 font-sans uppercase leading-tight"
          >
            KAHVE, LEZZET <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B86236] to-[#F3EBDD]">
              VE İYİ MOLALAR.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-[#FCFAF5]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ankara'da yer alan tren konseptli kafemizde, <span className="font-semibold text-[#FCFAF5]">Monkey Express Coffee</span>'nin taze demlenmiş kahveleri ve <span className="font-semibold text-[#FCFAF5]">Mom'y Burgers</span>'ın eşsiz lezzetleriyle keyifli bir yolculuğa çıkın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-[#B86236] hover:bg-[#a0522b] text-[#FCFAF5] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#B86236]/20 flex items-center justify-center space-x-2"
            >
              <span>Menüyü Keşfet</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[#FCFAF5]/20 bg-[#FCFAF5]/5 hover:bg-[#FCFAF5]/10 text-[#FCFAF5] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Instagram className="h-4 w-4 text-[#B86236]" />
              <span>Instagram'da Takip Et</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. SUB-BRANDS DIVISION SECTION */}
      <section className="relative py-24 bg-[#171817] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#B86236] uppercase mb-3">KONSEPTE DAİR</h2>
            <p className="text-3xl font-bold text-[#FCFAF5] font-sans">TEK BİR DURAKTA İKİ BENZERSİZ LEZZET MARKASI</p>
            <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Monkey Express Coffee */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 border border-[#FCFAF5]/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#B86236]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-[#B86236]/10 rounded-2xl">
                    <Coffee className="h-6 w-6 text-[#B86236]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FCFAF5]">Monkey Express</h3>
                    <p className="text-xs text-[#69705A] tracking-wider uppercase font-semibold">Specialty Coffee</p>
                  </div>
                </div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/menu/coffee/monkey-express-coffee.jpg"
                    alt="Monkey Express Specialty Coffee"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-[#FCFAF5]/70 font-light leading-relaxed mb-6">
                  Monkey Express, nitelikli çekirdekleri özenle işleyerek kahve kültürünü bir adım öteye taşıyor. Gün boyu taze demlenen filtre kahvelerden, espresso bazlı sütlü klasiklere ve taze soğuk kahvelere kadar aradığınız eşsiz aromaları sunar.
                </p>
              </div>
              <Link
                href="/menu?category=coffee"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#B86236] hover:text-[#FCFAF5] transition-colors"
              >
                <span>Kahve Menüsünü Gör</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>

            {/* Mom'y Burgers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 border border-[#FCFAF5]/5 p-8 rounded-3xl flex flex-col justify-between hover:border-[#B86236]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-[#B86236]/10 rounded-2xl">
                    <UtensilsCrossed className="h-6 w-6 text-[#B86236]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FCFAF5]">Mom'y Burgers</h3>
                    <p className="text-xs text-[#69705A] tracking-wider uppercase font-semibold">Sokak Lezzetleri</p>
                  </div>
                </div>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/menu/food/momy-burger.jpg"
                    alt="Momy Burgers Gourmet Burgers"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-[#FCFAF5]/70 font-light leading-relaxed mb-6">
                  Mom'y Burgers, sokak lezzetleri ve gurme burger tutkunları için lezzetli bir durak noktasıdır. Özel soslar, taptaze malzemeler ve çıtır yan lezzetlerle hazırlanan menümüzle, kahve keyfinizi mükemmel bir yemekle taçlandırın.
                </p>
              </div>
              <Link
                href="/menu?category=food"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#B86236] hover:text-[#FCFAF5] transition-colors"
              >
                <span>Yemek Menüsünü Gör</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (ÖNE ÇIKAN LEZZETLER) */}
      <section className="relative py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#B86236] uppercase mb-3">MÜŞTERİ FAVORİLERİ</h2>
              <h3 className="text-3xl font-bold text-[#FCFAF5] font-sans">ÖNE ÇIKAN LEZZETLER</h3>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#B86236] hover:text-[#FCFAF5] transition-colors mt-4 md:mt-0 group"
            >
              <span>Tüm Menüyü İncele</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-[#171817]/50 border border-[#FCFAF5]/5 rounded-2xl overflow-hidden hover:border-[#B86236]/30 transition-all duration-300 group"
              >
                <Link href={`/menu/${item.slug}`}>
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <div className="bg-[#171817]/95 text-[#FCFAF5] p-3 rounded-full shadow-lg">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#69705A] block mb-1">
                    {item.subcategory || (item.category === 'coffee' ? 'Kahve' : 'Yemek')}
                  </span>
                  <Link href={`/menu/${item.slug}`}>
                    <h4 className="text-base font-bold text-[#FCFAF5] hover:text-[#B86236] transition-colors line-clamp-1 mb-2">
                      {item.name}
                    </h4>
                  </Link>
                  <p className="text-xs text-[#FCFAF5]/60 font-light line-clamp-2">
                    {item.description || 'Detaylı bilgi için menü sayfamızı ziyaret edin.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ATMOSPHERE SECTION (MEKAN ATMOSFERİ) */}
      <section className="relative py-24 bg-[#171817]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-xs font-bold tracking-widest text-[#B86236] uppercase">MEKAN ATMOSFERİ</h2>
              <h3 className="text-4xl font-bold font-sans text-[#FCFAF5]">TREN İSTASYONU SICAKLIĞINDA BİR MOLA</h3>
              <p className="text-[#FCFAF5]/70 font-light leading-relaxed">
                Yolculuk, keşif ve iyi molalar... Adımıza ve ruhumuza uygun olarak, vintage tren kompartımanı detaylarıyla tasarlanmış mekânımızda sizleri ağırlıyoruz. Demir yolu estetiğini, endüstriyel çizgileri ve ahşabın sıcaklığını harmanladık.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-black/30 p-4 rounded-xl border border-[#FCFAF5]/5 text-center">
                  <span className="block text-2xl font-bold text-[#B86236]">Özgün</span>
                  <span className="text-[10px] text-[#FCFAF5]/50 tracking-wider uppercase font-semibold">Tren Teması</span>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-[#FCFAF5]/5 text-center">
                  <span className="block text-2xl font-bold text-[#B86236]">Nitelikli</span>
                  <span className="text-[10px] text-[#FCFAF5]/50 tracking-wider uppercase font-semibold">Usta Demleme</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mt-8">
                <Image
                  src="/images/cafe-interior.jpg"
                  alt="Wagon Cafe Interior Layout"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cafe-exterior.jpg"
                  alt="Wagon Cafe Storefront"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTAGRAM / PHOTO GALLERY */}
      <section className="relative py-24 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#B86236] uppercase mb-3">INSTAGRAM PAYLAŞIMLARI</h2>
            <p className="text-3xl font-bold text-[#FCFAF5] font-sans">GALERİMİZİ KEŞFEDİN</p>
            <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Wagon Coffee Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#171817]/90 text-[#FCFAF5] px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-1.5 shadow-lg">
                    <Eye className="h-3.5 w-3.5" />
                    <span>Büyüt</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#B86236] hover:text-[#FCFAF5] transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>@wagoncoffeefood'u Takip Et</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. MINIMALIST LOCATION & INFO SECTION */}
      <section className="relative py-24 bg-[#171817] border-t border-[#FCFAF5]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex p-4 bg-[#B86236]/10 rounded-full text-[#B86236]">
            <MapPin className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold font-sans text-[#FCFAF5]">BİZİ ZİYARET EDİN</h2>
          
          <div className="bg-black/30 border border-[#FCFAF5]/5 p-8 rounded-3xl max-w-xl mx-auto space-y-4">
            <div>
              <span className="block text-xs uppercase font-bold tracking-wider text-[#69705A] mb-1">Şehir</span>
              <p className="text-lg font-semibold text-[#FCFAF5]">Ankara, Türkiye</p>
            </div>
            <div className="border-t border-[#FCFAF5]/5 pt-4">
              <p className="text-sm text-[#FCFAF5]/60 font-light leading-relaxed">
                Adres, telefon ve çalışma saatleri gibi güncel detaylar için Instagram profilimizi ziyaret edebilir veya bizimle oradan doğrudan iletişime geçebilirsiniz.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B86236] hover:bg-[#a0522b] text-[#FCFAF5] px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram'dan Ulaşın</span>
            </a>
            <Link
              href="/iletisim"
              className="border border-[#FCFAF5]/10 hover:border-[#FCFAF5]/20 text-[#FCFAF5] px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center"
            >
              İletişim Formunu Doldurun
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": siteConfig.name,
            "image": `${siteConfig.canonicalUrl}/images/hero-wagon.jpg`,
            "url": siteConfig.canonicalUrl,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": siteConfig.city,
              "addressCountry": "TR"
            },
            "sameAs": [
              siteConfig.instagram
            ]
          })
        }}
      />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
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
              alt="Wagon Gallery Preview image"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
