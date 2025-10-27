# 🎯 Vapi AI Asistan Demo

Modern AI asistan demo sayfası - Docker ile kolay deployment.

## ✨ Özellikler

- 🤖 **İki Farklı AI Asistan**: Özelleştirilebilir asistanlar
- 🎵 **Real-time Audio Spektrum**: Konuştukça hareket eden görselleştirme
- 📱 **Responsive Tasarım**: Mobil ve desktop uyumlu
- 🐳 **Docker Desteği**: Kolay deployment
- ⚙️ **Environment Variables**: Güvenli konfigürasyon

## 🚀 Coolify ile Deployment

### 1. Coolify'da Repository Ekle
- **New Resource** > **Git Repository**
- **URL**: `https://github.com/asistpro-aps/vapi-assistant-demo`

### 2. Environment Variables Ekle
Coolify'da **Environment Variables** bölümüne şunları ekleyin:

```env
# Vapi Configuration (GEREKLİ!)
REACT_APP_VAPI_PUBLIC_KEY=your-vapi-public-key-here

# Asistan 1
REACT_APP_ASSISTANT1_ID=your-first-assistant-id
REACT_APP_ASSISTANT1_NAME=İlk Asistan Adı
REACT_APP_ASSISTANT1_DESC=İlk asistan açıklaması
REACT_APP_ASSISTANT1_GRADIENT=linear-gradient(135deg, #667eea 0%, #764ba2 100%)

# Asistan 2
REACT_APP_ASSISTANT2_ID=your-second-assistant-id
REACT_APP_ASSISTANT2_NAME=İkinci Asistan Adı
REACT_APP_ASSISTANT2_DESC=İkinci asistan açıklaması
REACT_APP_ASSISTANT2_GRADIENT=linear-gradient(135deg, #f093fb 0%, #f5576c 100%)

# Site Ayarları
REACT_APP_SITE_TITLE=Your Site Title
REACT_APP_SITE_SUBTITLE=Your Subtitle
```

### 3. Deploy
**Deploy** butonuna tıklayın!

## 🎨 Gradient Renk Örnekleri

```css
linear-gradient(135deg, #667eea 0%, #764ba2 100%) /* Mavi-Mor */
linear-gradient(135deg, #f093fb 0%, #f5576c 100%) /* Pembe-Kırmızı */
linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) /* Yeşil-Mavi */
linear-gradient(135deg, #fa709a 0%, #fee140 100%) /* Turuncu-Pembe */
```

## 🔐 Güvenlik

⚠️ **API anahtarları GitHub'da saklanmaz** - Sadece Coolify Environment Variables'da!