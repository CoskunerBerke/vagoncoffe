import { Shield } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `KVKK Aydınlatma Metni | ${siteConfig.name}`,
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında verilerinizin işlenme esasları.',
};

export default function KVKKPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 bg-black/20 p-8 sm:p-12 rounded-3xl border border-[#FCFAF5]/5">
          <div className="flex items-center space-x-3 text-[#B86236]">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl sm:text-3xl font-extrabold font-sans">KVKK AYDINLATMA METNİ</h1>
          </div>
          
          <div className="space-y-6 text-sm text-[#FCFAF5]/80 font-light leading-relaxed">
            <p>
              <strong>{siteConfig.name}</strong> olarak, kişisel verilerinizin güvenliğine ve gizliliğine büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla sizleri bilgilendirmek isteriz.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              1. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p>
              Web sitemiz üzerindeki iletişim formunu doldurduğunuzda elde edilen kimlik ve iletişim bilgileriniz (ad soyad, e-posta), sizlere geri dönüş yapmak ve taleplerinizi yanıtlamak amacıyla sınırlı olarak işlenmektedir.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              2. Kişisel Verilerin Aktarılması
            </h2>
            <p>
              İletişim formu aracılığıyla bizimle paylaştığınız kişisel verileriniz, yasal yükümlülüklerin yerine getirilmesi haricinde üçüncü şahıslarla, kurumlarla veya yurt dışıyla paylaşılmamaktadır.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              3. Veri Toplama Yöntemi ve Hukuki Sebebi
            </h2>
            <p>
              Kişisel verileriniz, sitemizdeki iletişim formunu doldurmanız vasıtasıyla elektronik ortamda toplanmaktadır. Söz konusu veriler, Kanun'un 5. maddesinde belirtilen "Açık rızanın varlığı" ve "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması" hukuki sebeplerine dayalı olarak işlenmektedir.
            </p>

            <h2 className="text-base font-bold text-[#FCFAF5] uppercase pt-4 border-b border-[#FCFAF5]/10 pb-2">
              4. Veri Sahibinin Hakları
            </h2>
            <p>
              KVKK'nın 11. maddesi kapsamında, kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme ve bunlara uygun kullanılıp kullanılmadığını bilme haklarına sahipsiniz. Haklarınızı kullanmak ve verileriniz hakkında bilgi almak için Instagram veya iletişim kanallarımız üzerinden bizimle irtibata geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
