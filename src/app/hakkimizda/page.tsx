import Image from 'next/image';
import { Coffee, UtensilsCrossed, Milestone, TrainFront } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hakkımızda | ${siteConfig.name}`,
  description: 'Wagon Coffee & Food hikayesi. Tren konseptli kafe kültürümüzü, Monkey Express Coffee ve Mom\'y Burgers lezzet duraklarımızı keşfedin.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FCFAF5] font-sans">
            MARKAMIZIN HİKAYESİ
          </h1>
          <p className="text-sm text-[#FCFAF5]/60 mt-3 font-light">
            Tren yolculuklarının o samimi ruhunu, nitelikli kahve ve gurme lezzetlerle birleştirerek Ankara'da eşsiz bir mola durağı yarattık.
          </p>
          <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
        </div>

        {/* Story Section - Text & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#B86236]">
              <TrainFront className="h-4 w-4" />
              <span>RAYLAR ÜSTÜNDE BİR MOLA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#FCFAF5] leading-tight">
              TREN KONSEPTİ VE LEZZET YOLCULUĞU
            </h2>
            <p className="text-sm text-[#FCFAF5]/70 font-light leading-relaxed">
              Tren garları, her zaman kavuşmaların, yeni başlangıçların ve keyifli yolculukların merkezidir. Biz de Wagon Coffee & Food olarak, bu eşsiz nostaljiyi modern bir kafe atmosferine taşımak istedik. 
            </p>
            <p className="text-sm text-[#FCFAF5]/70 font-light leading-relaxed">
              Mekânımızda yer alan vintage vagon kompartımanları, demir yolu aksesuarları ve endüstriyel detaylar, misafirlerimize sıradan bir kahve içiminin ötesinde zamansız bir deneyim sunuyor. Rayların ritmini, kahve fincanlarımızın sıcaklığıyla birleştiriyoruz.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#FCFAF5]/5">
            <Image
              src="/images/cafe-interior.jpg"
              alt="Wagon Cafe Interior Details"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Sub-brands grid */}
        <div className="bg-black/25 p-8 sm:p-12 rounded-3xl border border-[#FCFAF5]/5 mb-20 space-y-12">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-xs font-bold tracking-widest text-[#B86236] uppercase mb-2">MARKA BİRLİKTELİKLERİMİZ</h3>
            <h4 className="text-xl font-bold text-[#FCFAF5]">İKİ BENZERSİZ MARKA TEK ÇATI ALTINDA</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Monkey Express */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-2.5 bg-[#B86236]/10 rounded-xl text-[#B86236]">
                  <Coffee className="h-5 w-5" />
                </div>
                <h5 className="text-lg font-bold text-[#FCFAF5]">Monkey Express Coffee</h5>
              </div>
              <p className="text-xs text-[#FCFAF5]/60 font-light leading-relaxed">
                Misafirlerimize her zaman en nitelikli çekirdekleri sunmak amacıyla yola çıkan Monkey Express, usta kavurma teknikleri ve özenli demlemeleri ile kahve menümüzü zenginleştiriyor. Günün her saatine ve modunuza eşlik eden nitelikli espresso bazlı kahveleri bu durakta keşfedebilirsiniz.
              </p>
            </div>

            {/* Momy Burgers */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="p-2.5 bg-[#B86236]/10 rounded-xl text-[#B86236]">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <h5 className="text-lg font-bold text-[#FCFAF5]">Mom'y Burgers &amp; Sokak Lezzetleri</h5>
              </div>
              <p className="text-xs text-[#FCFAF5]/60 font-light leading-relaxed">
                Yalnızca kahvenin yanına atıştırmalık değil, günün tamamını keyifle geçirebileceğiniz bir menü tasarladık. Mom'y Burgers, özenle hazırlanan el yapımı sulu gurme burgerleri ve sokak lezzetleri klasiklerini en çıtır haliyle sunan iştah açıcı markamızdır.
              </p>
            </div>
          </div>
        </div>

        {/* Milestone info */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex p-3.5 bg-[#B86236]/10 rounded-full text-[#B86236]">
            <Milestone className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-[#FCFAF5]">GÜZEL MOLALAR İÇİN DOĞRU İSTASYON</h3>
          <p className="text-xs text-[#FCFAF5]/60 font-light leading-relaxed">
            Amacımız, Ankara'da sadece kaliteli kahve ve burger sunmak değil; aynı zamanda dostlarınızla buluşup çalışabileceğiniz, kitap okuyup dinlenebileceğiniz, tren garı nostaljisini hissettiren huzurlu bir yaşam alanı sunmaktır.
          </p>
        </div>

      </div>
    </div>
  );
}
