# 🐳 Vapi AI Asistan Demo - Docker Deployment Rehberi

## 📋 Hızlı Başlangıç

### 1. Repository'yi Klonla
```bash
git clone <your-repo-url>
cd vapi-assistant-demo
```

### 2. Environment Variables Düzenle
`.env` dosyasını düzenleyerek asistan bilgilerini güncelleyin:

```bash
# Asistan 1 - Villa Polikne Hotel
REACT_APP_ASSISTANT1_ID=4c765584-0bd2-4bf0-a59c-684d96166665
REACT_APP_ASSISTANT1_NAME=Villa Polikne Otel Asistanı
REACT_APP_ASSISTANT1_DESC=Otel rezervasyonları ve bilgileri için
REACT_APP_ASSISTANT1_GRADIENT=linear-gradient(135deg, #667eea 0%, #764ba2 100%)

# Asistan 2 - Hereke Balık Restaurant
REACT_APP_ASSISTANT2_ID=cbb10968-bd56-4996-83b1-61c697eed549
REACT_APP_ASSISTANT2_NAME=Hereke Balık Asistanı
REACT_APP_ASSISTANT2_DESC=Restoran rezervasyonları ve menü bilgileri için
REACT_APP_ASSISTANT2_GRADIENT=linear-gradient(135deg, #f093fb 0%, #f5576c 100%)

# Site Genel Ayarları
REACT_APP_SITE_TITLE=AsistPro.ai
REACT_APP_SITE_SUBTITLE=Hangi asistanla konuşmak istersiniz?
```

### 3. Docker ile Çalıştır

#### Seçenek A: Docker Compose (Önerilen)
```bash
docker-compose up -d
```

#### Seçenek B: Manuel Docker Build
```bash
# Build
docker build -t vapi-assistant-demo .

# Run
docker run -d \
  --name vapi-demo \
  -p 3000:80 \
  --env-file .env \
  vapi-assistant-demo
```

### 4. Erişim
- Web sitesi: http://localhost:3000
- Container logları: `docker-compose logs -f`

---

## 🔄 Asistan Bilgilerini Güncelleme

### 1. Environment Variables Güncelle
`.env` dosyasını düzenleyin:

```bash
# Yeni asistan eklemek için
REACT_APP_ASSISTANT1_ID=yeni-asistan-id
REACT_APP_ASSISTANT1_NAME=Yeni Asistan Adı
REACT_APP_ASSISTANT1_DESC=Yeni asistan açıklaması
REACT_APP_ASSISTANT1_GRADIENT=linear-gradient(135deg, #renk1, #renk2)
```

### 2. Container'ı Yeniden Başlat
```bash
# Mevcut container'ı durdur
docker-compose down

# Yeniden build et ve başlat
docker-compose up -d --build
```

### 3. Sadece Environment Variables Değişti ise
```bash
# Container'ı durdur
docker-compose down

# Sadece environment variables ile yeniden başlat
docker-compose up -d
```

---

## 📊 Production Deployment

### 1. Sunucuda Deployment
```bash
# Sunucuda klonla
git clone <your-repo-url>
cd vapi-assistant-demo

# Environment variables ayarla
cp .env.example .env
nano .env

# Production modunda çalıştır
docker-compose -f docker-compose.yml up -d
```

### 2. Reverse Proxy (Nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 3. SSL Sertifikası (Let's Encrypt)
```bash
# Certbot kurulumu
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası al
sudo certbot --nginx -d yourdomain.com
```

---

## 🔧 Maintenance Komutları

### Container Yönetimi
```bash
# Status kontrol
docker-compose ps

# Logları görüntüle
docker-compose logs -f

# Container'a bağlan
docker-compose exec vapi-demo sh

# Container'ı durdur
docker-compose down

# Container'ı sil (dikkatli!)
docker-compose down -v
```

### Güncelleme İşlemleri
```bash
# Git'ten güncellemeleri çek
git pull origin main

# Environment variables güncelle
nano .env

# Yeniden build et ve başlat
docker-compose up -d --build
```

### Backup İşlemleri
```bash
# Environment dosyasını yedekle
cp .env .env.backup

# Tüm konfigürasyonu yedekle
tar -czf vapi-demo-backup.tar.gz .env docker-compose.yml
```

---

## 🐛 Troubleshooting

### Container Başlamıyor
```bash
# Logları kontrol et
docker-compose logs

# Port kullanımını kontrol et
netstat -tulpn | grep :3000
```

### Environment Variables Çalışmıyor
```bash
# Container içindeki değişkenleri kontrol et
docker-compose exec vapi-demo env | grep REACT_APP
```

### Build Hatası
```bash
# Cache'i temizle ve yeniden build et
docker-compose build --no-cache
```

---

## 📱 Mobil Cihazlar İçin

Docker container'ınız yerel ağdaki diğer cihazlardan da erişilebilir:
- Telefon/Tablet: http://sunucu-ip:3000
- Aynı WiFi ağındaki cihazlar için docker-compose.yml'deki ports ayarını kullanın

---

## 🔐 Güvenlik Notları

1. **Environment Variables**: Hassas bilgileri `.env` dosyasında saklayın
2. **HTTPS**: Production'da mutlaka SSL sertifikası kullanın
3. **Firewall**: Sadece gerekli portları açın (80, 443)
4. **Updates**: Düzenli olarak Docker imajlarını güncelleyin

---

## 🆘 Destek

Sorun yaşıyorsanız:
1. Logları kontrol edin: `docker-compose logs`
2. Environment variables'ı doğrulayın
3. Port çakışması olup olmadığını kontrol edin
4. Docker ve Docker Compose versiyonlarını güncelleyin