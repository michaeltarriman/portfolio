# Use an official Node.js runtime as the base image
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2.4.5
COPY --from=builder /app/dist /var/www/
COPY --from=builder /app/Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/caddy/ /caddy
