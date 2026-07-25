import { FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Çerez Politikası | ${siteConfig.name}`,
  description: 'Web sitemizde kullanılan çerezler ve bunların yönetim yöntemleri.',
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 bg-black/20 p-8 sm:p-12 rounded-3xl border border-[#FCFAF5]/5">
          <div className="flex items-center space-x-3 text-[#B86236]">
            <FileText className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-extrabold font-sans">ÇEREZ POLİTİKASI</h1>
          </div>

          <div className="space-y-6 text-sm text-[#FCFAF5]/80 font-light leading-relaxed">
            <p>
              <strong>{siteConfig.name}</strong> olarak web sitemizde, kullanıcı deneyiminizi geliştirmek ve sitemizi daha verimli çalıştırabilmek adına çerezler (cookies) kullanıyoruz.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              1. Çerez Nedir?
            </h2>
            <p>
              Çerezler, web sitelerinin bilgisayarınıza veya mobil cihazınıza kaydettiği küçük veri dosyalarıdır. Bu sayede sonraki ziyaretlerinizde tercihleriniz hatırlanır ve daha hızlı bir gezinme imkanı sunulur.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              2. Kullanım Amaçları
            </h2>
            <p>
              Sitemizde kullanılan temel çerezler, sitenin doğru çalışması ve temel işlevleri yerine getirmesi için zorunlu olan teknik çerezlerdir. Ayrıca, site trafiğini anonim olarak analiz etmemize yardımcı olan analitik çerezler de kullanılabilmektedir.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              3. Çerezlerin Yönetimi
            </h2>
            <p>
              İstediğiniz zaman tarayıcı ayarlarınızı değiştirerek çerezlerin kaydedilmesini engelleyebilir veya mevcut çerezleri silebilirsiniz. Ancak, teknik çerezlerin devre dışı bırakılması durumunda sitemizin bazı fonksiyonlarının düzgün çalışmayabileceğini hatırlatmak isteriz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
