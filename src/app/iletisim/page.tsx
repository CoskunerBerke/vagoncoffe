'use client';

import { useState } from 'react';
import { Mail, MessageSquare, MapPin, CheckSquare, Square, AlertCircle } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';
import { siteConfig } from '@/data/site-config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    kvkkConsent: false,
  });

  const [error, setError] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }

    if (!formData.kvkkConsent) {
      setError('Lütfen KVKK onay kutusunu işaretleyin.');
      return;
    }

    // Instead of fake backend success message, redirect the user to Instagram DM as our verified contact channel
    setIsRedirecting(true);
    
    // Construct text message for copy-paste or info
    const instagramUrl = siteConfig.instagram;
    
    // Wait briefly to show redirection details, then open
    setTimeout(() => {
      window.open(instagramUrl, '_blank');
      setIsRedirecting(false);
    }, 1500);
  };

  const hasPhone = !!siteConfig.phone;
  const hasWhatsapp = !!siteConfig.whatsapp;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#171817] text-[#FCFAF5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#FCFAF5] font-sans">
            İLETİŞİM
          </h1>
          <p className="text-sm text-[#FCFAF5]/60 mt-3 font-light">
            Sorularınız, iş birliği veya rezervasyon talepleriniz için bizimle iletişime geçin.
          </p>
          <div className="w-12 h-1 bg-[#B86236] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Info Side */}
          <div className="space-y-8 bg-black/20 p-8 sm:p-10 rounded-3xl border border-[#FCFAF5]/5">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-[#B86236] uppercase mb-1">BİZE ULAŞIN</h2>
              <h3 className="text-xl font-bold text-[#FCFAF5] font-sans">İLETİŞİM BİLGİLERİ</h3>
            </div>

            <div className="space-y-6 text-sm text-[#FCFAF5]/80 font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#B86236] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#FCFAF5] mb-0.5">Konum</h4>
                  <p>Ankara, Türkiye</p>
                  {siteConfig.address && <p className="text-xs text-[#FCFAF5]/50 mt-1">{siteConfig.address}</p>}
                </div>
              </div>

              {hasPhone && (
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-[#B86236] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#FCFAF5] mb-0.5">Telefon</h4>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-[#B86236] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <Instagram className="h-5 w-5 text-[#B86236] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#FCFAF5] mb-0.5">Sosyal Medya</h4>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B86236] transition-colors"
                  >
                    @wagoncoffeefood
                  </a>
                </div>
              </div>
            </div>

            {/* Note about unverified details */}
            <div className="p-4 bg-black/40 border border-[#FCFAF5]/5 rounded-2xl text-xs text-[#FCFAF5]/50 font-light leading-relaxed">
              <strong>Not:</strong> Çalışma saatleri ve şube detayları için güncel duyuruları ve paylaşımları Instagram hesabımız üzerinden takip edebilirsiniz.
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-black/20 p-8 sm:p-10 rounded-3xl border border-[#FCFAF5]/5">
            <h3 className="text-lg font-bold text-[#FCFAF5] mb-6 font-sans">BİZE MESAJ GÖNDERİN</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#FCFAF5]/70 uppercase tracking-wider mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ahmet Yılmaz"
                  className="w-full px-4 py-3 bg-black/40 border border-[#FCFAF5]/10 rounded-xl text-sm focus:outline-none focus:border-[#B86236] text-[#FCFAF5] transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#FCFAF5]/70 uppercase tracking-wider mb-2">
                  E-Posta Adresiniz *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ahmet@example.com"
                  className="w-full px-4 py-3 bg-black/40 border border-[#FCFAF5]/10 rounded-xl text-sm focus:outline-none focus:border-[#B86236] text-[#FCFAF5] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#FCFAF5]/70 uppercase tracking-wider mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full px-4 py-3 bg-black/40 border border-[#FCFAF5]/10 rounded-xl text-sm focus:outline-none focus:border-[#B86236] text-[#FCFAF5] transition-all resize-none"
                />
              </div>

              {/* KVKK Consent Checkbox */}
              <div
                className="flex items-start space-x-3 cursor-pointer"
                onClick={() => setFormData({ ...formData, kvkkConsent: !formData.kvkkConsent })}
              >
                <div className="shrink-0 mt-0.5 text-[#B86236]">
                  {formData.kvkkConsent ? <CheckSquare className="h-4.5 w-4.5" /> : <Square className="h-4.5 w-4.5 text-[#FCFAF5]/30" />}
                </div>
                <span className="text-[11px] text-[#FCFAF5]/60 font-light leading-relaxed select-none">
                  Kişisel verilerimin korunması kapsamındaki <a href="/kvkk" target="_blank" className="text-[#B86236] hover:underline" onClick={(e) => e.stopPropagation()}>KVKK Metni'ni</a> okudum ve onaylıyorum. *
                </span>
              </div>

              {/* Errors indicator */}
              {error && (
                <div className="flex items-center space-x-2 text-xs text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Redirecting Notice */}
              {isRedirecting && (
                <div className="text-xs text-[#B86236] bg-[#B86236]/10 p-4 rounded-xl border border-[#B86236]/20 space-y-1.5 animate-pulse">
                  <p className="font-bold">Instagram'a Yönlendiriliyorsunuz...</p>
                  <p className="text-[10px] text-[#FCFAF5]/60">Mesajınızı doğrudan iletmek üzere Instagram hesabımıza aktarılıyorsunuz. Lütfen bekleyin.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full bg-[#B86236] hover:bg-[#a0522b] disabled:opacity-50 text-[#FCFAF5] py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#B86236]/10"
              >
                <span>Mesajı Gönder (Instagram DM)</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
