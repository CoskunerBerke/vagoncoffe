'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, Coffee, UtensilsCrossed, Eye, Sparkles } from 'lucide-react';
import { menuItems } from '@/data/menu';

export default function MenuClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Read URL parameters
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category state with URL parameter
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  // Sync search state and handle focus
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam === 'focus') {
      setSearchQuery('');
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    // preserve search if present
    router.push(`/menu?${params.toString()}`);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    const params = new URLSearchParams(searchParams.toString());
    if (!val) {
      params.delete('search');
    } else {
      params.set('search', val);
    }
    router.push(`/menu?${params.toString()}`);
  };

  const clearSearch = () => {
    setSearchQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`/menu?${params.toString()}`);
  };

  // Filters logic
  const filteredItems = menuItems.filter((item) => {
    if (!item.verified) return false;
    
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.subcategory &&
        item.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'Tümü', icon: null },
    { id: 'coffee', label: 'Kahveler (Monkey Express)', icon: Coffee },
    { id: 'food', label: 'Lezzetler (Mom\'y Burgers)', icon: UtensilsCrossed },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FCFAF5] font-sans">
          DİJİTAL MENÜ
        </h1>
        <p className="text-sm text-[#FCFAF5]/60 mt-3 font-light">
          Monkey Express Specialty Coffee ve Mom'y Burgers sokak lezzetlerimizin en taze ve güncel seçkilerini keşfedin.
        </p>
        <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
      </div>

      {/* Search and Filters Container */}
      <div className="space-y-6 mb-12">
        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#FCFAF5]/40">
            <Search className="h-5 w-5" />
          </span>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Menüde ara (Örn: Espresso, Burger...)"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-black/40 border border-[#FCFAF5]/10 rounded-full text-[#FCFAF5] placeholder-[#FCFAF5]/40 focus:outline-none focus:border-[#B86236] focus:ring-1 focus:ring-[#B86236] transition-all text-sm"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#FCFAF5]/40 hover:text-[#B86236]"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Categories filters - Mobile horizontal scrollable, Desktop center row */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-3 md:pb-0 scrollbar-none gap-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center space-x-2 shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#B86236] text-[#FCFAF5] shadow-lg shadow-[#B86236]/20'
                    : 'bg-black/30 border border-[#FCFAF5]/10 text-[#FCFAF5]/70 hover:border-[#B86236]/30 hover:text-[#FCFAF5]'
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Layout of products */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#171817]/60 border border-[#FCFAF5]/5 rounded-3xl overflow-hidden hover:border-[#B86236]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <Link href={`/menu/${item.slug}`}>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#171817]/80 backdrop-blur-md border border-[#FCFAF5]/10 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#B86236] uppercase">
                    {item.subcategory}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[#171817]/95 text-[#FCFAF5] p-3 rounded-full shadow-lg">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <Link href={`/menu/${item.slug}`}>
                      <h3 className="text-lg font-bold text-[#FCFAF5] hover:text-[#B86236] transition-colors leading-tight">
                        {item.name}
                      </h3>
                    </Link>
                  </div>
                  <p className="text-xs text-[#FCFAF5]/60 font-light leading-relaxed">
                    {item.description || 'Nitelikli malzemelerle hazırlanan durak klasiklerinden.'}
                  </p>
                </div>

                <div className="border-t border-[#FCFAF5]/5 pt-4 mt-6 flex justify-between items-center">
                  <span className="text-[10px] text-[#69705A] uppercase tracking-wider font-semibold">
                    {item.category === 'coffee' ? 'Monkey Express Coffee' : 'Mom\'y Burgers'}
                  </span>
                  <Link
                    href={`/menu/${item.slug}`}
                    className="text-xs font-bold text-[#B86236] hover:text-[#FCFAF5] flex items-center space-x-1 uppercase tracking-wider"
                  >
                    <span>İncele</span>
                    <Sparkles className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-black/20 rounded-3xl border border-[#FCFAF5]/5 max-w-md mx-auto">
          <p className="text-[#FCFAF5]/60 font-light text-sm">Aradığınız kriterlere uygun ürün bulunamadı.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              router.push('/menu');
            }}
            className="text-[#B86236] hover:underline text-xs font-semibold tracking-wider uppercase mt-4 block mx-auto"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}

      {/* Legal & Notice footer inside Menu */}
      <div className="mt-16 bg-black/25 border border-[#FCFAF5]/5 p-6 rounded-2xl max-w-2xl mx-auto text-center">
        <p className="text-xs text-[#FCFAF5]/50 font-light leading-relaxed">
          <strong>Önemli Uyarı:</strong> Ürün içerikleri, fiyatlar ve alerjen bilgileri değişiklik gösterebilir. Güncel bilgi ve alerjen uyarıları için lütfen sipariş vermeden önce işletmeyle doğrudan iletişime geçiniz.
        </p>
      </div>
    </div>
  );
}
