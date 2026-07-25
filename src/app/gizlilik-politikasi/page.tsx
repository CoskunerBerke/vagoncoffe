import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Gizlilik Politikası | ${siteConfig.name}`,
  description: 'Gizlilik ve veri güvenliği politikalarımız hakkında detaylı bilgi.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 bg-black/20 p-8 sm:p-12 rounded-3xl border border-[#FCFAF5]/5">
          <div className="flex items-center space-x-3 text-[#B86236]">
            <ShieldCheck className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-extrabold font-sans">GİZLİLİK POLİTİKASI</h1>
          </div>

          <div className="space-y-6 text-sm text-[#FCFAF5]/80 font-light leading-relaxed">
            <p>
              Bu Gizlilik Politikası, <strong>{siteConfig.name}</strong> web sitesi üzerinden toplanan verilerin türlerini, bunların nasıl saklandığını ve korunduğunu açıklamaktadır.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              1. Veri Güvenliği
            </h2>
            <p>
              Bizimle paylaştığınız tüm kişisel veriler, standart şifreleme ve güvenlik önlemleriyle korunan sunucularımızda saklanmaktadır. Yetkisiz erişimlerin engellenmesi amacıyla teknik alt yapımızı sürekli güncelliyoruz.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              2. Üçüncü Taraf Bağlantıları
            </h2>
            <p>
              Web sitemizde, Instagram profilimiz gibi dış platformlara yönlendiren bağlantılar bulunmaktadır. Bu dış sitelerin gizlilik politikalarından veya içeriklerinden {siteConfig.name} sorumlu tutulamaz. Bağlantı verdiğimiz platformların kendi sözleşmelerini incelemenizi öneririz.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              3. Politika Değişiklikleri
            </h2>
            <p>
              Gizlilik Politikamız, yasal düzenlemeler veya hizmet güncellemeleri nedeniyle zaman zaman revize edilebilir. Bu sayfayı periyodik olarak ziyaret etmeniz, güncel değişikliklerden haberdar olmanızı sağlayacaktır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
