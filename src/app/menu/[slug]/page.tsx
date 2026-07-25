import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Coffee, UtensilsCrossed, ShieldAlert, MessageSquare } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { menuItems } from '@/data/menu';
import { siteConfig } from '@/data/site-config';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return menuItems.filter((item) => item.verified).map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = menuItems.find((i) => i.slug === slug && i.verified);
  if (!item) return {};

  return {
    title: `${item.name} | ${siteConfig.name}`,
    description: `${item.name} detayı. Wagon Coffee & Food bünyesinde yer alan ${item.subcategory || 'özel lezzet'}.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const item = menuItems.find((i) => i.slug === slug && i.verified);

  if (!item) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/menu"
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#FCFAF5]/60 hover:text-[#B86236] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Menüye Geri Dön</span>
        </Link>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-black/20 p-6 sm:p-10 rounded-3xl border border-[#FCFAF5]/5">
          {/* Product Image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Meta */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B86236] mb-2">
                {item.category === 'coffee' ? (
                  <>
                    <Coffee className="h-3.5 w-3.5" />
                    <span>{siteConfig.subBrands.coffee}</span>
                  </>
                ) : (
                  <>
                    <UtensilsCrossed className="h-3.5 w-3.5" />
                    <span>{siteConfig.subBrands.food}</span>
                  </>
                )}
                <span>•</span>
                <span className="text-[#69705A]">{item.subcategory}</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#FCFAF5] font-sans leading-tight">
                {item.name}
              </h1>
            </div>

            {/* Hidden pricing and warnings statement */}
            <div className="p-5 bg-black/40 rounded-2xl border border-[#FCFAF5]/5 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B86236] block">
                Fiyat &amp; Alerjen Bilgisi
              </span>
              <p className="text-xs text-[#FCFAF5]/70 font-light leading-relaxed">
                Fiyatlarımız, mevsimsel ürün içeriklerimiz ve alerjen uyarılarımız değişkenlik gösterebileceği için güncel detayları doğrudan işletmemizden alabilirsiniz.
              </p>
              
              <div className="flex items-center space-x-2 text-[10px] text-[#69705A] uppercase tracking-wider font-semibold">
                <ShieldAlert className="h-3.5 w-3.5 text-[#B86236] shrink-0" />
                <span>Güncel İçerik Değişikliği Gösterebilir</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="space-y-3 pt-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#B86236] hover:bg-[#a0522b] text-[#FCFAF5] text-center py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center space-x-2"
              >
                <Instagram className="h-4 w-4" />
                <span>Detaylı Bilgi İçin Instagram</span>
              </a>

              {siteConfig.whatsapp && (
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba,%20${item.name}%20hakkında%20bilgi%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-[#FCFAF5]/10 hover:border-[#FCFAF5]/20 text-[#FCFAF5] text-center py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-4 w-4 text-[#B86236]" />
                  <span>WhatsApp Sorun</span>
                </a>
              )}
              
              <Link
                href="/iletisim"
                className="w-full border border-[#FCFAF5]/10 hover:border-[#FCFAF5]/20 text-[#FCFAF5]/60 hover:text-[#FCFAF5] text-center py-3 rounded-full font-semibold uppercase tracking-wider text-[10px] transition-all block"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
