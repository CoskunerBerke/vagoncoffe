import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171817] text-[#FCFAF5] border-t border-[#FCFAF5]/10 pt-16 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <div className="relative w-48 h-12">
              <Image
                src="/brand/logo-light.svg"
                alt="Wagon Coffee & Food Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-[#FCFAF5]/70 max-w-sm font-light leading-relaxed">
              Ankara'nın özgün tren konseptli kafesinde, Monkey Express Coffee'nin nitelikli kahvelerini ve Mom'y Burgers'ın eşsiz lezzetlerini bir araya getiriyoruz.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FCFAF5]/5 hover:bg-[#B86236] transition-all text-[#FCFAF5]"
                aria-label="Instagram'da Takip Et"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B86236]">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm text-[#FCFAF5]/70 font-light">
              <li>
                <Link href="/" className="hover:text-[#B86236] transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#B86236] transition-colors">Menü</Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-[#B86236] transition-colors">Galeri</Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-[#B86236] transition-colors">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-[#B86236] transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B86236]">İletişim</h4>
            <ul className="space-y-3 text-sm text-[#FCFAF5]/70 font-light">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#B86236] shrink-0 mt-0.5" />
                <span>Ankara, Türkiye</span>
              </li>
              
              {/* Conditional address */}
              {siteConfig.address && (
                <li className="flex items-start space-x-2">
                  <span className="pl-6">{siteConfig.address}</span>
                </li>
              )}

              {/* Conditional phone */}
              {siteConfig.phone && (
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#B86236] shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-[#B86236] transition-colors">
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-[#FCFAF5]/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-[#FCFAF5]/50 font-light">
          <div>
            &copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6">
            <Link href="/kvkk" className="hover:text-[#FCFAF5] transition-colors">KVKK Metni</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-[#FCFAF5] transition-colors">Gizlilik Politikası</Link>
            <Link href="/cerez-politikasi" className="hover:text-[#FCFAF5] transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
