FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json  .
COPY package-lock.json  .

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
