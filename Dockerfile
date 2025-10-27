# Node.js tabanlı multi-stage build
FROM node:18-alpine as build

# Çalışma dizini oluştur
WORKDIR /app

# Package dosyalarını kopyala
COPY package*.json ./

# Dependencies yükle (production + dev dependencies için)
RUN npm ci

# Kaynak kodları kopyala
COPY . .

# Production build oluştur
RUN npm run build

# Nginx tabanlı production image
FROM nginx:alpine

# Build dosyalarını nginx'e kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx konfigürasyonu
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port 80'i expose et
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]