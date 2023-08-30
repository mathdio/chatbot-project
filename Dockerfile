FROM node:16-alpine

WORKDIR /app/backend

COPY /app/backend/package*.json .

RUN npm install

COPY . .

WORKDIR /app/frontend

COPY /app/frontend/package*.json .

RUN npm install

COPY . .


