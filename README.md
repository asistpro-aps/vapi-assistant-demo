# 🎯 Vapi AI Asistan Demo

Villa Polikne Hotel ve Hereke Balık Restaurant için geliştirilmiş modern AI asistan demo sayfası.

## ✨ Özellikler

- 🤖 **İki Farklı AI Asistan**: Otel ve restoran için özelleştirilmiş
- 🎵 **Real-time Audio Spektrum**: Konuştukça hareket eden görselleştirme
- 📱 **Responsive Tasarım**: Mobil ve desktop uyumlu
- 🐳 **Docker Desteği**: Kolay deployment
- ⚙️ **Environment Variables**: Kolay konfigürasyon

## 🚀 Hızlı Başlangıç

### Docker ile (Önerilen)

```bash
# Repository'yi klonla
git clone <repo-url>
cd vapi-assistant-demo

# Environment variables düzenle
cp .env.example .env
nano .env

# Docker ile çalıştır
docker-compose up -d

# Erişim: http://localhost:3000
```

### Yerel Geliştirme

```bash
# Dependencies yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

## 🔧 Konfigürasyon

`.env` dosyasını düzenleyerek asistan bilgilerini güncelleyebilirsiniz:

```env
# Asistan 1
REACT_APP_ASSISTANT1_ID=your-assistant-id
REACT_APP_ASSISTANT1_NAME=Asistan Adı
REACT_APP_ASSISTANT1_DESC=Asistan açıklaması
REACT_APP_ASSISTANT1_GRADIENT=linear-gradient(135deg, #color1, #color2)

# Asistan 2
REACT_APP_ASSISTANT2_ID=your-assistant-id
REACT_APP_ASSISTANT2_NAME=Asistan Adı
REACT_APP_ASSISTANT2_DESC=Asistan açıklaması
REACT_APP_ASSISTANT2_GRADIENT=linear-gradient(135deg, #color1, #color2)

# Site Ayarları
REACT_APP_SITE_TITLE=Site Başlığı
REACT_APP_SITE_SUBTITLE=Site Alt Başlığı
```

## 📖 Deployment Rehberi

Detaylı deployment talimatları için [DOCKER-DEPLOYMENT.md](./DOCKER-DEPLOYMENT.md) dosyasını inceleyin.

## 🛠️ Teknolojiler

- **React 18.2.0**: Frontend framework
- **Vapi Web SDK**: AI asistan entegrasyonu
- **Docker**: Containerization
- **Nginx**: Production web server

## 📱 Demo

- **Villa Polikne Hotel Asistanı**: Otel rezervasyonları ve bilgileri
- **Hereke Balık Restaurant Asistanı**: Restoran rezervasyonları ve menü bilgileri

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit'leyin (`git commit -m 'Add amazing feature'`)
4. Push'layın (`git push origin feature/amazing-feature`)
5. Pull Request açın