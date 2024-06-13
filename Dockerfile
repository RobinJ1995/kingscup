FROM node:20 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/build/ /var/www/
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf