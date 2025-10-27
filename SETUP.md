# Kurulum Talimatları

## Node.js Kurulumu

Bu projeyi çalıştırmak için önce Node.js kurmanız gerekmektedir:

### Detaylı Kurulum Adımları:

1. **Node.js İndirme:**
   - https://nodejs.org adresine gidin
   - **LTS (Long Term Support)** versiyonunu seçin
   - **Windows Installer (.msi)** dosyasını indirin

2. **Kurulum:**
   - İndirilen `.msi` dosyasını çift tıklayarak çalıştırın
   - "Next" → "I accept the terms..." → "Next"
   - Kurulum konumunu değiştirmeden "Next"
   - **"Automatically install the necessary tools" kutusunu işaretleyin (ÖNEMLİ!)**
   - "Next" → "Install" → "Finish"

3. **Kurulum Doğrulama:**
   - **Tüm terminal pencerelerini kapatın**
   - **Yeni PowerShell penceresi açın**
   - Aşağıdaki komutları çalıştırın:
   ```cmd
   node --version
   npm --version
   ```
   - Her iki komut da versiyon numarası göstermeli

## Proje Kurulumu

1. **Bu klasöre gidin:**
   ```cmd
   cd d:\Work\vapi\vapi-assistant-demo
   ```

2. **Bağımlılıkları yükleyin:**
   ```cmd
   npm install
   ```

3. **Vapi konfigürasyonunu yapın:**
   
   `src/App.js` dosyasını açın ve aşağıdaki değerleri güncelleyin:
   
   ```javascript
   // Satır 11: Vapi public key'inizi yazın
   const VAPI_PUBLIC_KEY = 'your-vapi-public-key-here';
   
   // Satır 14-25: Asistan ID'lerinizi yazın
   const ASSISTANTS = {
     customer_service: {
       id: 'customer-service-assistant-id', // Buraya gerçek ID yazın
       // ...
     },
     sales: {
       id: 'sales-assistant-id', // Buraya gerçek ID yazın
       // ...
     }
   };
   ```

4. **Uygulamayı başlatın:**
   ```cmd
   npm start
   ```

5. **Tarayıcıda açın:**
   http://localhost:3000

## Vapi Setup Adımları

1. https://dashboard.vapi.ai adresine gidin
2. Hesap oluşturun veya giriş yapın
3. Dashboard'dan "API Keys" bölümüne gidin
4. Public Key'inizi kopyalayın
5. "Assistants" bölümünde iki asistan oluşturun
6. Her asistanın ID'sini kopyalayın

## Dosya Yapısı

```
vapi-assistant-demo/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Ana komponet (Vapi konfigürasyonu burada)
│   ├── App.css         # Stil dosyası
│   └── index.js        # React entry point
├── package.json        # Proje bağımlılıkları
└── README.md          # Detaylı dokümantasyon
```

## Demo Özellikler

✅ İki ayrı asistan butonu
✅ Gerçek zamanlı çağrı durumu
✅ Modern ve responsive tasarım
✅ Çağrı kontrolü (başlat/durdur)
✅ Visual feedback ve animasyonlar