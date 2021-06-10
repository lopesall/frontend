FROM node:8 as builder
ARG NPM_ENV=Development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public
RUN npm run build:${NPM_ENV}

FROM nginx:1.17.9
COPY --from=builder usr/src/app/build/ /usr/share/nginx/html/
EXPOSE 80


