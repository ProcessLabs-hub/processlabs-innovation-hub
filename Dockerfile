# Простая production-сборка без Nixpacks и без Caddy.
# Traefik в Dokploy будет проксировать на опубликованный порт 4173.

FROM node:20-alpine AS build
WORKDIR /app

# Устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build

# Продакшн-слой: минимальный образ только со статикой и http-server
FROM node:20-alpine
WORKDIR /app

# Устанавливаем простой статик-сервер
RUN npm install -g http-server

# Копируем собранный билд
COPY --from=build /app/dist ./dist

EXPOSE 4173
CMD ["http-server", "dist", "-p", "4173", "-a", "0.0.0.0"]
