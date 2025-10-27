# Vapi Demo - Başlatma Kılavuzu

## ✅ TAMAMLANAN İŞLEMLER:
- ✅ Node.js kurulu (v25.0.0)
- ✅ NPM mevcut (11.6.2)
- ✅ React projesi oluşturuldu
- ✅ Vapi Web SDK eklendi
- ✅ Modern tasarım hazırlandı
- ✅ Demo sayfası kodlandı

## ⚠️ KALAN SORUN:
- PATH sorunu: Terminal Node.js'i bulamıyor

## 🚀 ÇÖZÜM ADIMLARı:

### 1. Yeni PowerShell Penceresi Açın
- Windows + R tuşlarına basın
- "powershell" yazın ve Enter'a basın

### 2. Şu Komutları Sırayla Çalıştırın:
```powershell
# Demo klasörüne gidin
cd "d:\Work\vapi\vapi-assistant-demo"

# PATH'i geçici olarak güncelleyin
$env:PATH += ";C:\Program Files\nodejs"

# Paketleri kontrol edin (zaten yüklü olmalı)
npm --version

# Demo uygulamasını başlatın
npm start
```

### 3. Tarayıcıda Açın:
- http://localhost:3000

## 📋 VAPI KONFIGÜRASYONU:

Uygulamayı başlattıktan sonra `src/App.js` dosyasında:

```javascript
// Satır 11: Vapi public key'inizi yazın
const VAPI_PUBLIC_KEY = 'your-vapi-public-key-here';

// Satır 14-25: Asistan ID'lerinizi yazın
const ASSISTANTS = {
  customer_service: {
    id: 'customer-service-assistant-id', // Gerçek ID
    // ...
  },
  sales: {
    id: 'sales-assistant-id', // Gerçek ID
    // ...
  }
};
```

## 🎯 VAPI SETUP:
1. https://dashboard.vapi.ai
2. Hesap oluşturun
3. API Keys → Public Key kopyalayın
4. Assistants → 2 asistan oluşturun
5. ID'leri kopyalayın

## 📁 DOSYA YAPISI:
```
vapi-assistant-demo/
├── src/
│   ├── App.js          ← Vapi konfigürasyonu burada
│   ├── App.css         ← Güzel tasarım
│   └── index.js
├── public/index.html
├── package.json
├── demo-preview.html   ← Statik önizleme
└── README.md
```

## 🆘 SORUN YAŞARSENIZ:
- SETUP.md dosyasına bakın
- README.md'de detaylı bilgi var
- demo-preview.html ile tasarımı görebilirsiniz

## 💫 DEMO ÖZELLİKLERİ:
✅ 2 ayrı asistan butonu
✅ Gerçek zamanlı çağrı durumu
✅ Modern gradient tasarım
✅ Responsive (mobil uyumlu)
✅ Smooth animasyonlar
✅ Professional görünüm