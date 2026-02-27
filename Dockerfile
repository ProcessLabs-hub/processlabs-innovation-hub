# Статичная сборка через bun, финальный образ на nginx.

### Этап сборки
FROM oven/bun:1.1.30-alpine AS build
WORKDIR /app

# Устанавливаем зависимости (используем bun.lockb)
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# Копируем остальной код и собираем
COPY . .
RUN bun run build

### Рантайм
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html

# Копируем собранный фронт
COPY --from=build /app/dist ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
