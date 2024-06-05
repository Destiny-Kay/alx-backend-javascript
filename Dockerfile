FROM node:12-slim

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "loop.js"]
