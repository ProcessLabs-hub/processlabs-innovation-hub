# Статичная сборка через bun, финальный образ на nginx.

### Этап сборки
FROM oven/bun:1.1.30-alpine AS build
WORKDIR /app

# Устанавливаем зависимости (bun сам подтянет bun.lockb); без --frozen-lockfile, чтобы регенерировать при необходимости
COPY bun.lockb package.json ./
RUN bun install

# Копируем остальной код и собираем
COPY . .
RUN bun run build

### Рантайм
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Копируем собранный фронт
COPY --from=build /app/dist ./

# Перенастраиваем nginx на порт 3000 (так как Dokploy ожидает 3000)
RUN sed -i 's/80/3000/g' /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
