FROM node:14.19-alpine

WORKDIR /app

COPY . .

ENV VITE_BACKEND_API=http://localhost:9000

RUN npm install

RUN npm run build

FROM nginx:latest

COPY ./dist /usr/share/nginx/html