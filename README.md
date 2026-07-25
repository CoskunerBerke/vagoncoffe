# Wagon Coffee & Food Web Sitesi

Wagon Coffee & Food için modern, özgün, iştah açıcı, mobil öncelikli ve profesyonel olarak tasarlanmış Next.js web sitesi.

Bu proje, Ankara'da faaliyet gösteren tren konseptli kafenin iki ana alt markası olan **Monkey Express Coffee** ve **Mom'y Burgers & Sokak Lezzetleri**'ni estetik bir biçimde bir araya getiren bir dijital istasyondur.

---

## 🛠️ Kullanılan Teknolojiler

*   **Çatı (Framework):** Next.js (App Router, TypeScript)
*   **Arayüz & Stil:** Tailwind CSS v4
*   **Animasyonlar:** Framer Motion
*   **İkonlar:** Lucide Icons (Custom SVG Instagram desteğiyle)
*   **Görseller:** Next/Image ve Yapay Zekâ ile üretilmiş yüksek kaliteli, lisanssız ürün ve mekan fotoğrafları.

---

## 🚀 Başlangıç & Kurulum

Proje bağımlılıklarını kurmak ve yerel sunucuyu çalıştırmak için aşağıdaki adımları takip edin:

### 1. Bağımlılıkları Kurun
```bash
npm install
```

### 2. Geliştirme Sunucusunu Çalıştırın
```bash
npm run dev
```
Tarayıcınızda `http://localhost:3000` adresini açarak siteyi inceleyebilirsiniz.

### 3. Production Build Alın
Yerel klasör yollarınızda Türkçe veya UTF-8 karakterler (Örn: `Masaüstü`) bulunuyorsa, Turbopack'in Unicode kısıtlamasından etkilenmemek için projeyi **Webpack** kullanarak derlemeniz önerilir:
```bash
npx next build --webpack
```
Bu komut, type check, linting ve optimizasyon işlemlerini Webpack motoruyla hatasız tamamlayacaktır.

---

## ⚙️ Merkezi Ayarlar & Menü Yönetimi

Tüm dinamik veri, iletişim bilgileri ve menü listesi iki ana dosyadan kontrol edilmektedir. Bilgileri değiştirmek için bileşen kodlarını düzenlemenize gerek yoktur.

### 1. İşletme Bilgilerini Güncelleme
Tüm işletme ayarları, sosyal bağlantılar ve adres bilgileri aşağıdaki dosyadan yönetilir:
`src/data/site-config.ts`

```typescript
export const siteConfig = {
  name: "Wagon Coffee & Food",
  title: "WAGON COFFEE & FOOD",
  instagram: "https://www.instagram.com/wagoncoffeefood/",
  phone: "", // Telefon numarası doğrulandığında buraya ekleyin
  whatsapp: "", // WhatsApp numarası doğrulandığında buraya ekleyin (Format: 90XXXXXXXXXX)
  address: "", // Açık adres doğrulandığında buraya ekleyin
  city: "Ankara",
  mapsUrl: "", // Google Maps yönlendirme linkini buraya ekleyin
  // ...
};
```
*Not: site-config.ts içinde boş bırakılan alanlar (örn: telefon, whatsapp, maps linki vb.) arayüzde otomatik olarak gizlenir ve hatalı yönlendirme yapılmaz.*

### 2. Menü Ürünlerini & Fiyatları Düzenleme
Menü kategorileri, ürün adları ve görselleri aşağıdaki dosyada tutulmaktadır:
`src/data/menu.ts`

Yeni bir ürün eklemek veya mevcut ürünü düzenlemek için veri modelini güncelleyin:
```typescript
{
  id: "momy-burger",
  slug: "momy-burger",
  name: "Mom'y Burger",
  category: "food", // 'coffee', 'food', 'desserts', 'drinks'
  subcategory: "Burgers",
  price: undefined, // Fiyat doğrulandığında sayı olarak girin. Bilinmiyorsa undefined bırakın.
  image: "/menu/food/momy-burger.jpg",
  verified: true, // Production arayüzünde gösterilmesi için 'true' yapın.
  // ...
}
```
*Fiyat bilgisi `undefined` bırakıldığında arayüzde fiyat etiketi gizlenir. Ürün detaylarında kullanıcılar WhatsApp veya Instagram DM kanallarına yönlendirilir.*

---

## 📸 Görselleri Değiştirme

Projede kullanılan görseller aşağıdaki klasör yapısında yer almaktadır. Kendi görsellerinizi aynı isim ve uzantılarla bu klasörlere kopyalayarak değiştirebilirsiniz:

*   **Logolar:** `public/brand/`
    *   `logo-light.svg` (Koyu arka planlar için krem/altın logo)
    *   `logo-dark.svg` (Açık arka planlar için koyu logo)
    *   `favicon.svg` (Tarayıcı sekme ikonu)
*   **Genel Görseller:** `public/images/`
    *   `hero-wagon.jpg` (Ana sayfa arka plan görseli)
    *   `cafe-interior.jpg` (Kafe içi detay fotoğrafı)
    *   `cafe-exterior.jpg` (Dış cephe/storefront fotoğrafı)
*   **Menü Görselleri:** `public/menu/`
    *   `coffee/monkey-express-coffee.jpg`
    *   `food/momy-burger.jpg`
    *   `food/patates-kizartmasi.jpg`
*   **Galeri Görselleri:** `public/gallery/`
    *   `gallery-1.jpg` ile `gallery-6.jpg` arası görseller.

---

## 🔒 Doğrulanamayan Alanlar Raporu

Instagram profilinin kısıtlı erişimi nedeniyle uydurma veri üretilmesini engellemek amacıyla aşağıdaki alanlar boş bırakılmış ve arayüzde gizlenmiştir:

1.  **Telefon Numarası:** Doğrulanmadı.
2.  **WhatsApp İletişim Hattı:** Doğrulanmadı.
3.  **Açık Adres & İlçe:** Sadece "Ankara" konumu doğrulandı.
4.  **Google Maps İşletme Kaydı:** Doğrulanmadı.
5.  **Çalışma Saatleri:** Doğrulanmadı.
6.  **Yemek Sipariş / Rezervasyon Platformları:** Doğrulanmadı.
7.  **Menü Ürün Fiyatları & Alerjen Listeleri:** Doğrulanmadı.

*Bu bilgiler doğrulandığında ilgili alanlar `site-config.ts` ve `menu.ts` dosyalarına girildiği an arayüzde otomatik olarak aktifleşecektir.*
